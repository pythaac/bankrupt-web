import { Box, Text } from "@chakra-ui/react";

import styles from './layout.module.css'
import NavigatorList from "../component/NavigatorList";

export default function Navigator() {
    const items = [
        {text: "Board"},
        {text: "Category"},
        {text: "Update Category"},
        {text: "Error Log"}
    ]

    return (
        <Box className={styles.navigator}>
            <Box
                color="black"
                padding="15px"
            >
                <NavigatorList items={items}/>
            </Box>
            
        </Box>
    )
}