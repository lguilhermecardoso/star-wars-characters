"use client";

import axios from "axios";
import CharactersList from "@/app/_components/CharactersList";
import Filter from "@/app/_components/Filter";
import { getWorldName } from "@/app/_helpers/getWorldName";
import { useState, useEffect } from "react";
import { Character } from "./_types/types";

export default function Home() {
  const [initialData, setInitialData] = useState({ results: [], next: null });
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [planets, setPlanets] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const data = await getCharacters();
      setInitialData(data);
      setFilteredCharacters(data.results);

      const uniquePlanets = [
        ...new Set(data.results.map((character) => character.homeWorldName)),
      ];
      setPlanets(uniquePlanets);
      setIsLoading(false);
    }

    fetchData();
  }, []);

  function handleFilterChange(selectedPlanet) {
    if (selectedPlanet === "All") {
      setFilteredCharacters(initialData.results);
    } else {
      setFilteredCharacters(
        initialData.results.filter(
          (character: Character) => character.homeWorldName === selectedPlanet,
        ),
      );
    }
  }

  return (
    <>
      <Filter planets={planets} onFilterChange={handleFilterChange} />
      {isLoading ? (
        <div className="text-center">Loading characters...</div>
      ) : (
        <CharactersList
          initialData={{ results: filteredCharacters, next: initialData.next }}
        />
      )}
    </>
  );
}

async function getCharacters(url = "https://swapi.dev/api/people/") {
  try {
    const { data } = await axios.get(url);
    const charactersWithWorldNames = await Promise.all(
      data.results.map(async (character: Character) => {
        const homeWorldName = await getWorldName(character);
        return {
          ...character,
          homeWorldName,
          imageUrl: "https://picsum.photos/432/230",
        };
      }),
    );

    return {
      results: charactersWithWorldNames,
      next: data.next,
    };
  } catch (error) {
    console.error(error);
    return {
      results: [],
      next: null,
    };
  }
}
