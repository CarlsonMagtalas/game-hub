import { Heading } from '@chakra-ui/react';
import { GameQuery } from '../App';

interface Props {
    gameQuery: GameQuery;
}


const GameHeader = ({ gameQuery }: Props) => {

  let heading = `${gameQuery.genre?.name || ''} ${gameQuery.platform?.name || ''} Games`  

  return (
    <Heading marginY={3} as="h1">{ heading }</Heading>
  )
}

export default GameHeader