"use client"

import { ListCollection } from "@chakra-ui/react"
import {
    SelectContent,
    SelectItem,
    SelectRoot,
    SelectTrigger,
    SelectValueText,
  } from "@/components/ui/select"

export default function Select({itemCollection, getKey, onValueChange}
    : {itemCollection: ListCollection<any>, getKey: Function, onValueChange: Function}) {

    return (
        <SelectRoot 
            collection={itemCollection} 
            size="sm" 
            onValueChange={(element) => onValueChange(element.value)}
            width="100%"
        >
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