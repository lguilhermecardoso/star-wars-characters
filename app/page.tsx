import axios from "axios";
import { CharactersList } from "./_components/charactersList";

export default async function Home() {
  async function getCharacters() {
    const data = await axios.get("https://swapi.dev/api/people/");
    return data.data.results;
  }

  const characters = await getCharacters();

  return (
    <main className="">
      <CharactersList characters={characters} />
    </main>
  );
}
