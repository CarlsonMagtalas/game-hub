import { SearchIcon } from "@chakra-ui/icons";
import { InputGroup, InputLeftElement, Input } from "@chakra-ui/react";
import { useRef } from "react";

interface Props {
  submitted: (searched: string) => void;
}


const SearchBar = ({ submitted }: Props) => {

    const ref = useRef<HTMLInputElement>(null);

    return (
      <form onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) submitted(ref.current.value);
      }} className="searchBar">
        <InputGroup>
          <InputLeftElement>
            <SearchIcon />
          </InputLeftElement>
          <Input ref={ref} placeholder="Search bar" />
        </InputGroup>
      </form> 
    )
}

export default SearchBar;