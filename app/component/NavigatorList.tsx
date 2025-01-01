'use client'

import { Box, Button, VStack } from "@chakra-ui/react";
import { useRouter } from 'next/navigation'

interface Item {
    text: string,
    path: string
}

export default function NavigatorList({ items }: { items: Array<Item> } ) {
    const router = useRouter()

    return (
        <VStack
            width="100%"
            height="100%"
        >
            {items.map((item) => (
                <Button 
                    key={item.text} 
                    fontSize={"17px"}
                    onClick={() => router.push(item.path)}
                >
                    {item.text}
                </Button>
            ))}
        </VStack>
    )
}