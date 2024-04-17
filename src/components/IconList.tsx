import {  HStack, Icon } from '@chakra-ui/react';
import { Platform } from '../hooks/useGame';
import { FaXbox, FaApple, FaLinux, FaPlaystation, FaWindows } from "react-icons/fa";
import { BsGlobe } from 'react-icons/bs';
import { MdPhoneIphone } from 'react-icons/md';
import { IconType } from 'react-icons';
import { SiNintendo } from 'react-icons/si';
interface Props {
    platform: Platform[];
}

const IconList = ({ platform }: Props) => {
    const iconMap: { [key: string]: IconType } = {
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        nintendo: SiNintendo,
        mac: FaApple,
        linux: FaLinux,
        ios: MdPhoneIphone,
        web: BsGlobe
    }

  return (
    <HStack marginY={1}>
        {platform.map((p) => (
            <Icon key={p.id} as={iconMap[p.slug]} />
        ))}
    </HStack>
  )
}

export default IconList