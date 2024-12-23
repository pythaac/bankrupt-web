import { Box, Flex, Text } from "@chakra-ui/react";

import styles from './layout.module.css'

export default function Header() {
    return (
        <Box className={styles.header}>
            <Flex gap="0" direction="row" justifyContent="space-between" height="100%">
                <Text className={styles.header_title}>
                    Bankrupt
                </Text>

                <Text className={styles.header_last_update}>
                    Last update : 2024 12-05 11:18 pm
                </Text>
            </Flex>
        </Box>
    )
}