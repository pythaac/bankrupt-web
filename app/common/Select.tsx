"use client"

import { ListCollection } from "@chakra-ui/react"
import {
    SelectContent,
    SelectItem,
    SelectRoot,
    SelectTrigger,
    SelectValueText,
  } from "@/components/ui/select"

export default function Select({itemCollection, getKey}
    : {itemCollection: ListCollection<any>, getKey: Function}) {

    return (
        <SelectRoot collection={itemCollection} size="sm" flex="max-content">
        <SelectTrigger clearable>
            <SelectValueText/>
        </SelectTrigger>
        <SelectContent>
            {itemCollection.items.map((element) => (
            <SelectItem item={element} key={getKey(element)}>
                {element.label}
            </SelectItem>
            ))}
        </SelectContent>
        </SelectRoot>
    )
}