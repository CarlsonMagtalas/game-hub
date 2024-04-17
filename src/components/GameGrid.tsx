import { SimpleGrid } from "@chakra-ui/react";
import GameCards from "./GameCards";
import CardSkeleteon from "./CardSkeleteon";
import GameContainer from "./GameContainer";
import useGame from "../hooks/useGame";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery
}

const GameGrid = ({ gameQuery }: Props) => {
  
  const {data, error, loading} = useGame(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8]

  return (
    <>
        {error && <h1>{error}</h1>}
        <SimpleGrid columns={{sm: 1, md: 2, lg: 4, xl: 4}} spacing="1rem">
          {loading && skeletons.map((skeleton) => (
            <GameContainer  key={skeleton}>
              <CardSkeleteon />
            </GameContainer>
          ))}
          {data.map((game) => (
            <GameContainer key={game.id}>
              <GameCards game={game} />
            </GameContainer>
          ))}
        </SimpleGrid>
    </>
  )
}

export default GameGrid