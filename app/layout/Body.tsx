import { Box, Table } from "@chakra-ui/react";

import styles from './layout.module.css'
import Board from "../component/Board";

export default function Body() {
    const items = [
        {index: 1, court: "인천지방법원", seller: "채무자1", title: "부동산 매각공고", due: "2025.01.20", category: "부동산", file: "pdf"},
        {index: 2, court: "서울회생법원", seller: "채무자2", title: "채권 매각공고", due: "2025.01.20", category: "채권", file: "hwp"},
    ]

    return (
        <Box className={styles.body}>
            <Box 
                padding="50px"
                minW="1000px"
            >
                <Board items={items}/>
            </Box>

        </Box>
    )
}