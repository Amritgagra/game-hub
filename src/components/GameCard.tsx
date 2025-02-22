import { Card, Image, HStack } from "@chakra-ui/react";
import { Game } from "@/hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "@/services/getCroppedImageUrl";

interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <>
      <Card.Root height={"100%"} borderRadius={"10px"} overflow={"hidden"}>
        <Image
          height={"240px"}
          objectFit={"cover"}
          src={getCroppedImageUrl(game.background_image)}
        />
        <Card.Body>
          <HStack justifyContent={"space-between"} marginBottom={3}>
            <PlatformIconList
              platforms={game.parent_platforms.map(
                (platform) => platform.platform
              )}
            />
            <CriticScore score={game.metacritic} />
          </HStack>
          <Card.Title fontSize={"2xl"}>{game.name}</Card.Title>
        </Card.Body>
      </Card.Root>
    </>
  );
};

export default GameCard;
