import { getWorldName } from "@/app/_helpers/getWorldName";
import { Character } from "@/app/_types/types";
import Image from "next/image";

interface CharactersListProps {
  characters: Character[];
}

export async function CharactersList({ characters }: CharactersListProps) {
  return (
    <div className="m-auto max-w-[1320px] px-14 pt-20">
      <header>
        <h3 className="text-[34px] font-normal">All Characters</h3>
      </header>
      <section className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {characters.map(async (character: Character) => {
          let mockImage = "https://picsum.photos/432/230";
          character.homeWorldName = await getWorldName(character);

          return (
            <div key={character.name} className="mb-28">
              <Image
                src={mockImage}
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
          );
        })}
      </section>
    </div>
  );
}
