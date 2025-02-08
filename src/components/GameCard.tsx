import { Card, Image } from "@chakra-ui/react";
import { Game } from "@/hooks/useGames";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <>
      <Card.Root maxW={"sm"} overflow={"hidden"}>
        <Image
          height={"240px"}
          objectFit={"cover"}
          src={game.background_image}
        />
        <Card.Body>
          <Card.Title>{game.name}</Card.Title>
          <PlatformIconList
            platforms={game.parent_platforms.map(
              (platform) => platform.platform
            )}
          />
        </Card.Body>
      </Card.Root>
    </>
  );
};

export default GameCard;
