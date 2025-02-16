import useGenre, { Genre } from "@/hooks/useGenre";
import getCroppedImageUrl from "@/services/getCroppedImageUrl";
import { Box, HStack, Image, Link, Spinner } from "@chakra-ui/react";

interface Props {
  onSelectedGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectedGenre, selectedGenre }: Props) => {
  const { data, isLoading } = useGenre();
  return (
    <>
      {isLoading && <Spinner size="lg" />}
      <Box as="ul">
        {data.map((genre) => (
          <Box as="li" key={genre.id} paddingBlock="5px">
            <HStack>
              <Image
                src={getCroppedImageUrl(genre.image_background)}
                boxSize="32px"
                borderRadius={8}
              />
              <Link
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
                onClick={() => onSelectedGenre(genre)}
                fontSize="lg"
              >
                {genre.name}
              </Link>
            </HStack>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default GenreList;
