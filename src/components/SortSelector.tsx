import { ChevronDownIcon } from "@chakra-ui/icons";
import { Menu, MenuButton, Button, MenuList, MenuItem, Box } from "@chakra-ui/react";
interface Props {
    onSelect: (selectedSort: string) => void;
    selectedSort: string;
}

const SortSelector = ({ onSelect, selectedSort }: Props) => {
    const sortOrders = [
        {value: '', label: 'Relevance'},
        {value: '-added', label: 'Date added'},
        {value: 'name', label: 'Name'},
        {value: '-released', label: 'Release date'},
        {value: '-metacritic', label: 'Popularity'},
        {value: 'rating', label: 'Average rating'},

    ];

    const currentSortOrder = sortOrders.find(order => order.value === selectedSort);

    return (
        <Box marginBottom={4}>  
            <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>Sort By: {currentSortOrder?.label ? currentSortOrder?.label : "Relevance"}</MenuButton>
                <MenuList>
                    {sortOrders.map((item) => (
                        <MenuItem onClick={() => onSelect(item.value)} key={item.value} value={item.value}>{item.label}</MenuItem>
                    ))}
                </MenuList>

            </Menu>
        </Box>
      )
}

export default SortSelector;