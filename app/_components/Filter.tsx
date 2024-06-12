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
    <div className="m-auto max-w-[1320px] px-14 pt-10">
      <label htmlFor="planet-filter" className="block text-[20px] font-normal">
        Filter by Homeworld:
      </label>
      <select
        id="planet-filter"
        value={selectedPlanet}
        onChange={(e) => setSelectedPlanet(e.target.value)}
        className="mt-2 w-[200px] rounded border border-gray-950 px-4 py-2"
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
