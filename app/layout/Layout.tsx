import { Box, Flex, HStack } from "@chakra-ui/react";
import Header from "./Header";
import Navigator from "./Navigator";
import Body from "./Body";

import styles from './layout.module.css'

export default function Layout() {
    return (
        <div>
            <Box className={styles.layout}>
                <Header/>
                <HStack gap="0" direction="row">
                    <Navigator/>
                    <Body/>
                </HStack>
            </Box>
        </div>
    )
}