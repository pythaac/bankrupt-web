'use client'

import { Box, Flex, Link, Text, VStack } from '@chakra-ui/react'

import styles from './layout.module.css'
import { useSyncTime } from '../common/api/UseSyncTime'

import { format } from 'date-fns'
import { ISyncTime } from '../common/Constants'

export default function Header() {
  const syncTimeResult = useSyncTime()

  function getFormattedTime(synctime: ISyncTime) {
    if (synctime) {
      return format(synctime.syncTime, 'yyyy-MM-dd hh:mm:ss a')
    }
    return ''
  }

  return (
    <Box className={styles.header}>
      <Flex className={styles.header_flex}>
        <Text className={styles.header_title}>Bankrupt</Text>

        <VStack>
          <Text className={styles.header_last_update}>
            {'마지막 동기화 시간 : ' + getFormattedTime(syncTimeResult.data)}
          </Text>
          <Text className={styles.header_copyright}>
            데이터 출처 : 대한민국 법원 (
            <Link href="https://www.scourt.go.kr/" target="_blank" color="blue">
              https://www.scourt.go.kr/
            </Link>
            )
          </Text>
        </VStack>
      </Flex>
    </Box>
  )
}
