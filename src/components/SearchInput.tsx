import { Input } from "@chakra-ui/react";
import { InputGroup } from "./ui/input-group";
import { BsSearch } from "react-icons/bs";
import { useRef } from "react";

interface Props {
  onSearch: (search: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (ref.current) onSearch(ref.current.value);
      }}
    >
      <InputGroup width={"100%"} flex={1} startElement={<BsSearch />}>
        <Input
          ref={ref}
          borderRadius={30}
          placeholder="Search games.."
          variant="outline"
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
