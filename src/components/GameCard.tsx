import { Card, Image } from "@chakra-ui/react";
import { Game } from "@/hooks/useGames";

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
        </Card.Body>
      </Card.Root>
    </>
  );
};

export default GameCard;
