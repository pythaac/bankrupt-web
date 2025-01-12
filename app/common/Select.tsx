"use client"

import { createListCollection } from "@chakra-ui/react"
import {
    SelectContent,
    SelectItem,
    SelectRoot,
    SelectTrigger,
    SelectValueText,
  } from "@/components/ui/select"

interface Category {
    categoryName: string
}

export default function Select({items}: {items: Array<Category>}) {
    const categories = createListCollection({items: items});

    return (
        <SelectRoot collection={categories} size="sm" width="100px">
        <SelectTrigger>
            {/* <SelectValueText placeholder="카테고리" /> */}
        </SelectTrigger>
        <SelectContent>
            {categories.items.map((category) => (
            <SelectItem item={category} key={category.categoryName}>
                {category.categoryName}
            </SelectItem>
            ))}
        </SelectContent>
        </SelectRoot>
    )
}