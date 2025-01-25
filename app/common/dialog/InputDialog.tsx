"use client"

import { createToaster, Input, Stack, Toast, Toaster } from "@chakra-ui/react"
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
import { ReactNode, useRef, Ref, useContext } from "react"
import { FieldValues, useForm, UseFormRegister } from "react-hook-form"

import styles from './dialog.module.css'
import { ToastContext } from "../Context"

function getHeader(title: string) {
    return (
        <DialogHeader className={styles.dialog}>
            <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
    )
}

function getBody({ label, placeholder, register, submitName }: {
    label: string,
    placeholder: string,
    register: UseFormRegister<any>,
    submitName: string
}) {
    return (
        <DialogBody pb="4" className={styles.dialog}>
            <Stack gap="4">
                <Field label={label}>
                    <Input placeholder={placeholder} autoComplete="off" {...register(submitName)} />
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
            <DialogActionTrigger asChild>
                <Button type="submit">저장</Button>
            </DialogActionTrigger>
        </DialogFooter>
    )
}

export default function InputDialog<T extends FieldValues>({ children, title, label, placeholder, submitName, onSubmitSave }: {
    children: ReactNode,
    title: string,
    label: string,
    placeholder: string,
    submitName: string,
    onSubmitSave: Function
}) {

    const { register, handleSubmit, reset, formState: { errors } } = useForm<T>();
    const toaster = useContext(ToastContext);

    const onSubmit = handleSubmit((data) => {

        const promise = new Promise<void>(async (resolve) => {
            await onSubmitSave(data);
            reset();
            resolve();
          });

        toaster.promise(promise, {
            success: {
              title: "업로드 완료",
              description: "저장이 성공적으로 완료되었습니다",
            },
            error: {
              title: "업로드 실패",
              description: "저장에 실패하였습니다",
            },
            loading: { title: "업로드 중...", description: "잠시만 기다려주세요" },
          })
    });

    return (
        <>
            <DialogRoot>
                <DialogTrigger asChild>
                    {children}
                </DialogTrigger>
                <DialogContent>
                    {getHeader(title)}
                    <form onSubmit={onSubmit}>
                        {getBody({ label, placeholder, register, submitName })}
                        {getFooter()}
                    </form>
                </DialogContent>
            </DialogRoot>
        </>
    )
}
