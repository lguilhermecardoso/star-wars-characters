import { Character } from "../_types/types";

export async function getWorldName(character: Character) {
  const data = await fetch(character.homeworld);
  const world = await data.json();
  return world.name;
}
