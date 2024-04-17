import { HStack, Image } from '@chakra-ui/react'
import logo from '../assets/logo.webp';
import ColorModeSwitch from './ColorModeSwitch';
import SearchBar from './SearchBar';

interface Props {
  submitted: (searched: string) => void;
}

const NavBar = ({ submitted }: Props) => {
  return (
    <HStack justifyContent='space-between'
    padding='10px'>
        <Image src={logo} boxSize="60px" />
          <SearchBar submitted={submitted} />
        <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  )
}

export default NavBar