import useGenre, { Genre } from "@/hooks/useGenre";
import getCroppedImageUrl from "@/services/getCroppedImageUrl";
import { Box, HStack, Image, Link, Spinner } from "@chakra-ui/react";

interface Props {
  selectedGenre: (genre: Genre) => void;
}

const GenreList = ({ selectedGenre }: Props) => {
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
              <Link onClick={() => selectedGenre(genre)} fontSize="lg">
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
