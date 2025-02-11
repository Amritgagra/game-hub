import useGenre from "@/hooks/useGenre";
import getCroppedImageUrl from "@/services/getCroppedImageUrl";
import { Box, HStack, Image, Text } from "@chakra-ui/react";

const GenreList = () => {
  const { data } = useGenre();
  return (
    <>
      <Box as="ul">
        {data.map((genre) => (
          <Box as="li" key={genre.id} paddingBlock="5px">
            <HStack>
              <Image
                src={getCroppedImageUrl(genre.image_background)}
                boxSize="32px"
                borderRadius={8}
              />
              <Text fontSize="lg">{genre.name}</Text>
            </HStack>
          </Box>
        ))}
      </Box>
    </>
  );
};

export default GenreList;
