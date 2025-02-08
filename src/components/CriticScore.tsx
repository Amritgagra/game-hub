import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}
const CriticScore = ({ score }: Props) => {
  const color = score > 75 ? "green.300" : score > 60 ? "yellow.300" : "";
  return (
    <>
      <Badge color={color} paddingX={2} borderRadius={"4px"} fontSize={"14px"}>
        {score}
      </Badge>
    </>
  );
};

export default CriticScore;
