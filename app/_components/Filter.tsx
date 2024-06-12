"use client";

import { useState, useEffect } from "react";

interface FilterProps {
  planets: string[];
  // eslint-disable-next-line no-unused-vars
  onFilterChange: (selectedPlanet: string) => void;
}

export default function Filter({ planets, onFilterChange }: FilterProps) {
  const [selectedPlanet, setSelectedPlanet] = useState("All");

  useEffect(() => {
    onFilterChange(selectedPlanet);
  }, [selectedPlanet]);

  return (
    <div className="m-auto flex max-w-[1320px] items-center px-14 pt-10">
      <label
        htmlFor="planet-filter"
        className="mt-2 block text-base font-normal"
      >
        Filter by:
      </label>
      <select
        id="planet-filter"
        value={selectedPlanet}
        onChange={(e) => setSelectedPlanet(e.target.value)}
        className="ml-3 mt-2 w-[200px] rounded border border-gray-950 px-4 py-2"
      >
        <option value="All">All</option>
        {planets.map((planet) => (
          <option key={planet} value={planet}>
            {planet}
          </option>
        ))}
      </select>
    </div>
  );
}
