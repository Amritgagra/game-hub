import { Card, Skeleton } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <>
      <Card.Root width="300px" maxW={"sm"} overflow="hideen">
        <Skeleton height={"240px"} />
        <Card.Body>
          <Skeleton height="3" marginBottom={2} />
          <Skeleton height="3" width="80%" marginBottom={2} />
          <Skeleton height="3" width="80%" />
        </Card.Body>
      </Card.Root>
    </>
  );
};

export default GameCardSkeleton;
