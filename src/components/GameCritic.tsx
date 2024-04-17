import { Badge } from "@chakra-ui/react";

interface Props {
    critic: number;
}

const GameCritic = ({ critic }: Props) => {

    let color = critic > 90 ? "green" : critic < 90 ? "yellow": "";

    return (
        <Badge colorScheme={color}>
            {critic}
        </Badge>
    )
}

export default GameCritic;