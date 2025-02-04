'use client'

import { Box, createToaster, HStack } from '@chakra-ui/react'
import Header from './Header'
import Navigator from './Navigator'

import styles from './layout.module.css'
import { ReactNode } from 'react'
import ToastComponent from '../common/ToastComponent'
import { ToastContext } from '../common/Context'

export default function Layout({ children }: { children: ReactNode }) {
  const toaster = createToaster({
    placement: 'bottom',
    overlap: true,
  })

  return (
    <ToastContext.Provider value={toaster}>
      <Box className={styles.layout}>
        <ToastComponent>
          <Header />
          <HStack gap="0" direction="row" height="100%">
            <Navigator />
            <Box className={styles.body}>
              <Box padding="50px" minW="1000px">
                {children}
              </Box>
            </Box>
          </HStack>
        </ToastComponent>
      </Box>
    </ToastContext.Provider>
  )
}
