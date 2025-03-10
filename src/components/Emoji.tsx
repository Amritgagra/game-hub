import { Image, ImageProps } from "@chakra-ui/react";
import bullsEye from "../assets/bulls-eye.webp";
import meh from "../assets/meh.webp";
import thumbsUp from "../assets/thumbs-up.webp";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh", width: "25px" },
    4: { src: thumbsUp, alt: "recommended", width: "25px" },
    5: { src: bullsEye, alt: "exceptional", width: "35px" },
  };

  if (rating < 3) return null;

  return <Image {...emojiMap[rating]} marginTop={3} />;
};

export default Emoji;
