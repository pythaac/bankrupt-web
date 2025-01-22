"use client";

import { 
    Flex
} from "@chakra-ui/react";
import styles from './category.module.css'
import CategoryBoard from "./CategoryBoard";
import { useCategoryBundle } from "../common/api/UseCategoryBundle";
import KeywordBoard from "./KeywordBoard";

export default function Body() {
    const [categoryBundleApiResult, categoryBundleApiProps] = useCategoryBundle();

    return (
        <Flex className={styles.body_flex}>
            <CategoryBoard categoryBundleState={[categoryBundleApiResult, categoryBundleApiProps]}/>
            <KeywordBoard categoryBundleState={[categoryBundleApiResult, categoryBundleApiProps]}/>
        </Flex>
    )
}