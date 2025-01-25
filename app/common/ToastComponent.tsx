import { Toaster, Toast, createToaster } from "@chakra-ui/react";
import { useContext } from "react";
import { ToastContext } from "./Context";


export default function ToastComponent(props: { children: React.ReactNode }) {
    const toaster = useContext(ToastContext);

    return (
        <>
            {props.children}
            <Toaster toaster={toaster}>
                {(toast) => (
                <Toast.Root key={toast.id}>
                    <Toast.Title>{toast.title}</Toast.Title>
                    <Toast.Description>{toast.description}</Toast.Description>
                    <Toast.CloseTrigger>
                    </Toast.CloseTrigger>
                </Toast.Root>
                )}
            </Toaster>
        </>
    )
}