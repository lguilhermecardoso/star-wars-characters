"use client";

import { Character } from "@/app/_types/types";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
import { getWorldName } from "@/app/_helpers/getWorldName";

interface CharactersListProps {
  initialData: {
    results: Character[];
    next: string | null;
  };
}

export default function CharactersList({ initialData }: CharactersListProps) {
  const [characters, setCharacters] = useState<Character[]>(
    initialData.results,
  );
  const [nextPage, setNextPage] = useState<string | null>(initialData.next);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  useEffect(() => {
    async function processCharacters() {
      setIsLoading(true);
      const updatedCharacters = await Promise.all(
        initialData.results.map(async (character) => {
          const homeWorldName = await getWorldName(character);
          return {
            ...character,
            homeWorldName,
            imageUrl: "https://picsum.photos/432/230",
          };
        }),
      );
      setCharacters(updatedCharacters);
      setIsLoading(false);
    }

    processCharacters();
  }, [initialData.results]);

  async function loadMoreCharacters() {
    if (nextPage) {
      setIsLoadingMore(true);
      try {
        const { data } = await axios.get(nextPage);
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
        setCharacters((prevCharacters) => [
          ...prevCharacters,
          ...charactersWithWorldNames,
        ]);
        setNextPage(data.next);
      } catch (error) {
        console.error(error);
      }
      setIsLoadingMore(false);
    }
  }

  if (isLoading) {
    return <div className="text-center">Loading characters...</div>;
  }

  return (
    <div className="m-auto max-w-[1320px] px-14 pt-20">
      <header>
        <h3 className="text-[34px] font-normal">All Characters</h3>
      </header>
      <section className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {characters.map((character: Character) => (
          <div key={character.name} className="mb-28">
            <Image
              src={character.imageUrl}
              width={432}
              height={230}
              alt="Character Image"
            />
            <h4 className="mt-4 text-[20px] font-normal leading-7">
              {character.name}
            </h4>
            <p className="mt-1 font-normal leading-7 text-gray-950">
              {character.homeWorldName}
            </p>
            <p className="m-0 mt-3 p-0 font-light uppercase">
              HEIGHT . {character.height}
            </p>
            <p className="m-0 p-0 font-light uppercase">
              MASS . {character.mass}
            </p>
            <p className="m-0 p-0 font-light uppercase">
              GENDER . {character.gender}
            </p>
          </div>
        ))}
      </section>
      {nextPage && (
        <div className="flex w-full flex-1 justify-center">
          <button
            onClick={loadMoreCharacters}
            className="mb-3 w-[350px] rounded border border-gray-950 px-4 py-2 font-bold"
            disabled={isLoadingMore}
          >
            {isLoadingMore ? "Loading more..." : "Load More"}
          </button>
        </div>
      )}
    </div>
  );
}
