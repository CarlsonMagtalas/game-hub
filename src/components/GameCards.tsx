import { Game } from '../hooks/useGame'
import { Card, CardBody, HStack, Heading, Image } from '@chakra-ui/react'
import IconList from './IconList'
import GameCritic from './GameCritic'
import getCroppedImageUrl from '../services/image-url'
import Emoji from './Emoji'

interface CardProps {
    game: Game
}

const GameCards = ({ game }: CardProps) => {

  return (
    <Card>
        <Image src={getCroppedImageUrl(game.background_image)} />
        <CardBody>
            <HStack marginBottom={3} justifyContent="space-between" >
              <IconList key={game.id} platform={game.parent_platforms.map((p) => p.platform)} />
              <GameCritic critic={game.metacritic} />
            </HStack>
            <Heading fontSize='2xl'>{game.name} <Emoji rating={game.rating_top} /></Heading>
        </CardBody> 
    </Card>
  )
}

export default GameCards