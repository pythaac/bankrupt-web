import { Box } from "@chakra-ui/react";

import styles from './layout.module.css'
import NavigatorList from "../common/NavigatorList";

export default function Navigator() {
    const items = [
        {text: "Board", path: "/"},
        {text: "Category", path: "/category"}
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