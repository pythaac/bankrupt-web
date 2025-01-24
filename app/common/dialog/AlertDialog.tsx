import { Button } from "@/components/ui/button"
import {
  DialogActionTrigger,
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ReactNode } from "react"

import styles from './dialog.module.css'

function getHeader() {
  return (
    <DialogHeader className={styles.dialog}>
      <DialogTitle>정말 삭제하시겠습니까?</DialogTitle>
    </DialogHeader>
  )
}

function getBody() {
  return (
    <DialogBody className={styles.dialog}>
    </DialogBody>
  )
}

function getFooter(onClick: any) {
  return (
    <DialogFooter className={styles.dialog}>
      <DialogActionTrigger asChild>
        <Button variant="outline">취소</Button>
      </DialogActionTrigger>
      <Button colorPalette="red" onClick={onClick}>삭제</Button>
    </DialogFooter>
  )
}

export default function AlertDialog({children, onClick} : {children: ReactNode, onClick: any}) {
  return (
    <DialogRoot role="alertdialog">
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent>
        {getHeader()}
        {getBody()}
        {getFooter(onClick)}
        <DialogCloseTrigger />
      </DialogContent>
    </DialogRoot>
  )
}
