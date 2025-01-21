"use client"

import { Box, Flex, Text } from "@chakra-ui/react";

import styles from './layout.module.css'
import { useSyncTime } from "../common/api/UseSyncTime";

import { format } from 'date-fns';
import { ISyncTime } from "../common/Constants";

export default function Header() {
    const syncTimeResult = useSyncTime();

    function getFormattedTime(synctime: ISyncTime) {
        if (synctime) {
            return format(synctime.syncTime, 'yyyy-MM-dd hh:mm:ss a');
        }
        return "";
    }

    console.log(syncTimeResult.data)

    return (
        <Box className={styles.header}>
            <Flex className={styles.header_flex}>
                <Text className={styles.header_title}>
                    Bankrupt
                </Text>

                <Text className={styles.header_last_update}>
                    {"마지막 동기화 시간 : " + getFormattedTime(syncTimeResult.data)}
                </Text>
            </Flex>
        </Box>
    )
}