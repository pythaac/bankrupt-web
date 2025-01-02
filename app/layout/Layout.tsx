import { Box, Flex, HStack, VStack } from "@chakra-ui/react";
import Header from "./Header";
import Navigator from "./Navigator";

import styles from './layout.module.css'
import { ReactNode } from "react";

export default function Layout({children}: {children: ReactNode}) {
    return (
        <>
            <Box className={styles.layout}>
                <Header/>
                <HStack gap="0" direction="row" height="100%">
                    <Navigator/>
                    {children}
                </HStack>
            </Box>
        </>
    )
}