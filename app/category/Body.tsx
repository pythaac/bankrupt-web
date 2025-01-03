"use client";

import { 
    Flex,
    Text,
} from "@chakra-ui/react";

import ScrolledHalfBoard from '../common/ScrolledHalfBoard'
import styles from './category.module.css'

export default function Body() {
    const categoryColumns = [
        <Text>Category</Text>,
        <Text>Icon</Text>
    ]
    const categoryItems = [
        [<Text>채권</Text>, <Text>Icon</Text>],
        [<Text>부동산</Text>, <Text>Icon</Text>],
        [<Text>채권</Text>, <Text>Icon</Text>],
        [<Text>부동산</Text>, <Text>Icon</Text>],
        [<Text>채권</Text>, <Text>Icon</Text>],
        [<Text>부동산</Text>, <Text>Icon</Text>],
        [<Text>채권</Text>, <Text>Icon</Text>],
        [<Text>부동산</Text>, <Text>Icon</Text>],
        [<Text>채권</Text>, <Text>Icon</Text>],
        [<Text>부동산</Text>, <Text>Icon</Text>],
        [<Text>채권</Text>, <Text>Icon</Text>],
        [<Text>부동산</Text>, <Text>Icon</Text>],
    ]
    const kewordsColumns = [
        <Text>Keywords</Text>,
        <Text>Icon</Text>
    ]
    const kewordsItems = [
        [<Text>채무자</Text>, <Text>Icon</Text>],
        [<Text>채무</Text>, <Text>Icon</Text>],
        [<Text>채무자</Text>, <Text>Icon</Text>],
        [<Text>채무</Text>, <Text>Icon</Text>],
        [<Text>채무자</Text>, <Text>Icon</Text>],
        [<Text>채무</Text>, <Text>Icon</Text>],
    ]

    return (
        <Flex className={styles.body_flex}>
            <ScrolledHalfBoard columns={categoryColumns} items={categoryItems} />
            <ScrolledHalfBoard columns={kewordsColumns} items={kewordsItems} />
        </Flex>
    )
}