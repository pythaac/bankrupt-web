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
import { FieldValues, useForm, UseFormRegister } from "react-hook-form"

import styles from './dialog.module.css'

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
                    <Input placeholder={placeholder} {...register(submitName)} />
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
    const { register, handleSubmit, formState: { errors } } = useForm<T>();

    const onSubmit = handleSubmit((data) => onSubmitSave(data));

    return (
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
    )
}
