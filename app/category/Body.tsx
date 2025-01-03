import { 
    Flex,
    HStack,
} from "@chakra-ui/react";

import ScrolledHalfBoard from '../component/ScrolledHalfBoard'
import styles from './category.module.css'

export default function Body() {
    const items = [
        {index: 1, court: "인천지방법원"},
        {index: 2, court: "서울회생법원"},
        {index: 3, court: "인천지방법원"},
        {index: 4, court: "서울회생법원"},
        {index: 5, court: "인천지방법원"},
        {index: 6, court: "서울회생법원"},
        {index: 7, court: "인천지방법원"},
        {index: 8, court: "서울회생법원"},
        {index: 9, court: "인천지방법원"},
        {index: 10, court: "서울회생법원"},
        {index: 11, court: "인천지방법원"},
        {index: 12, court: "서울회생법원"},
        {index: 13, court: "인천지방법원"},
        {index: 14, court: "서울회생법원"},
        {index: 15, court: "인천지방법원"},
        {index: 16, court: "서울회생법원"},
        {index: 17, court: "인천지방법원"},
        {index: 18, court: "서울회생법원"},
        {index: 19, court: "인천지방법원"},
        {index: 20, court: "서울회생법원"},
        {index: 21, court: "인천지방법원"},
        {index: 22, court: "서울회생법원"},
        {index: 23, court: "인천지방법원"},
        {index: 24, court: "서울회생법원"}
    ]

    return (
        <Flex className={styles.body_flex}>
            <ScrolledHalfBoard items={items} />
            <ScrolledHalfBoard items={items} />
        </Flex>
    )
}