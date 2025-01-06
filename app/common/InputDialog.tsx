"use client"

import { Input, Stack } from "@chakra-ui/react"
import { Button } from "@/components/ui/button"
import {
  DialogActionTrigger,
  DialogBody,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Field } from "@/components/ui/field"
import { ReactNode, useRef, Ref } from "react"

import styles from './component.module.css'

function getHeader() {
  return (
    <DialogHeader className={styles.dialog}>
      <DialogTitle>새로운 카테고리 추가</DialogTitle>
    </DialogHeader>
  )
}

function getBody(ref: Ref<HTMLInputElement>) {
  return (
    <DialogBody pb="4" className={styles.dialog}>
      <Stack gap="4">
        <Field label="카테고리 이름을 입력하세요">
          <Input ref={ref} placeholder="카테고리" />
        </Field>
      </Stack>
    </DialogBody>
  )
}

function getFooter() {
  return (
    <DialogFooter className={styles.dialog}>
      <DialogActionTrigger asChild>
        <Button variant="outline">취소</Button>
      </DialogActionTrigger>
      <Button>저장</Button>
    </DialogFooter>
  )
}

export default function InputDialog({children} : {children: ReactNode}) {
  const ref = useRef<HTMLInputElement>(null)

  return (
    <DialogRoot initialFocusEl={() => ref.current}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent>
        {getHeader()}
        {getBody(ref)}
        {getFooter()}
      </DialogContent>
    </DialogRoot>
  )
}
