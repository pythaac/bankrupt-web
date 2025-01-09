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

import styles from './dialog.module.css'

function getHeader(title: string) {
  return (
    <DialogHeader className={styles.dialog}>
      <DialogTitle>{title}</DialogTitle>
    </DialogHeader>
  )
}

function getBody({ref, label, placeholder}: {
  ref: Ref<HTMLInputElement>,
  label: string,
  placeholder: string
}) {
  return (
    <DialogBody pb="4" className={styles.dialog}>
      <Stack gap="4">
        <Field label={label}>
          <Input ref={ref} placeholder={placeholder} />
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

export default function InputDialog({children, title, label, placeholder} : {
  children: ReactNode,
  title: string,
  label: string,
  placeholder: string
}) {
  const ref = useRef<HTMLInputElement>(null)

  return (
    <DialogRoot initialFocusEl={() => ref.current}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent>
        {getHeader(title)}
        {getBody({ref, label, placeholder})}
        {getFooter()}
      </DialogContent>
    </DialogRoot>
  )
}
