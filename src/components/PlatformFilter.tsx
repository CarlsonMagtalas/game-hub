import { ChevronDownIcon } from '@chakra-ui/icons'
import { Box, Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import usePlatforms from '../hooks/usePlatforms'
import { Platform } from '../hooks/useGame'

interface Props {
  onSelectedPlat: (platform: Platform) => void;
  selectedPlat: Platform | null;
}

const PlatformFilter = ({ onSelectedPlat, selectedPlat }: Props) => {

  let { data, error } = usePlatforms();

  if (error) return null;

  return (
    <Box marginBottom={4}>  
        <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>{selectedPlat?.name || 'Platforms' }</MenuButton>
            <MenuList>
                {data.map((platform) => (
                  <MenuItem onClick={() => onSelectedPlat(platform)} key={platform.id}>{platform.name}</MenuItem>
                ))}
                <MenuItem>Playstation</MenuItem>
            </MenuList>
        </Menu>
    </Box>
  )
}

export default PlatformFilter