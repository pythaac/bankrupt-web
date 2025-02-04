import { Button } from '@/components/ui/button'
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
} from '@/components/ui/dialog'
import { ReactNode, useContext } from 'react'

import styles from './dialog.module.css'
import { ToastContext } from '../Context'

function getHeader() {
  return (
    <DialogHeader className={styles.dialog}>
      <DialogTitle>정말 삭제하시겠습니까?</DialogTitle>
    </DialogHeader>
  )
}

function getBody() {
  return <DialogBody className={styles.dialog}></DialogBody>
}

function getFooter(onSubmit: any) {
  return (
    <DialogFooter className={styles.dialog}>
      <DialogActionTrigger asChild>
        <Button variant="outline">취소</Button>
      </DialogActionTrigger>
      <DialogActionTrigger asChild>
        <Button colorPalette="red" onClick={onSubmit}>
          삭제
        </Button>
      </DialogActionTrigger>
    </DialogFooter>
  )
}

export default function AlertDialog({
  children,
  onClick,
}: {
  children: ReactNode
  onClick: () => Promise<any>
}) {
  const toaster = useContext(ToastContext)

  const onSubmit = () => {
    const promise = new Promise<void>(async (resolve, reject) => {
      const isSuccess = await onClick()

      if (isSuccess) {
        resolve()
      } else {
        reject()
      }
    })

    toaster.promise(promise, {
      success: {
        title: '삭제 완료',
        description: '삭제가 성공적으로 완료되었습니다',
      },
      error: {
        title: '삭제 실패',
        description: '삭제에 실패하였습니다',
      },
      loading: { title: '삭제중...', description: '잠시만 기다려주세요' },
    })
  }

  return (
    <DialogRoot role="alertdialog">
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        {getHeader()}
        {getBody()}
        {getFooter(onSubmit)}
        <DialogCloseTrigger />
      </DialogContent>
    </DialogRoot>
  )
}
