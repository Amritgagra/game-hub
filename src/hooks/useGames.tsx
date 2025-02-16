import useData from "./useData";
import { Genre } from "./useGenre";

export interface platforms {
  id: number;
  name: string;
  slug: string;
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: platforms }[];
  metacritic: number;
}
const useGames = (selectedGenre: Genre | null) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: selectedGenre?.id,
      },
    },
    [selectedGenre?.id]
  );

export default useGames;
