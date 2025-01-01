import { Box, Text } from "@chakra-ui/react";

interface Item {
    text: string
}

export default function NavigatorList({ items }: { items: Array<Item> } ) {
    return (
        <Box
            width="100%"
            height="100%"
        >
            {items.map((item) => (
                <Text key={item.text} truncate padding="10px">{item.text}</Text>
            ))}
        </Box>
    )
}