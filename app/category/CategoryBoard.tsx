'use client'

import { Button, IconButton, Text } from '@chakra-ui/react'
import ScrolledHalfBoard from '../common/board/ScrolledHalfBoard'
import InputDialog from '../common/dialog/InputDialog'
import { PiPlusBold } from 'react-icons/pi'
import { apiServerUrl, IApiResult, ICategory } from '../common/Constants'
import { ReactNode } from 'react'
import { useCategory } from '../common/api/UseCategory'
import AlertDialog from '../common/dialog/AlertDialog'
import { FaTrashCan } from 'react-icons/fa6'

interface CategoryBody {
  categoryName: string
}

function getCategoryColumns(categoryApiResult: IApiResult<Array<ICategory>>) {
  async function onClickAddCategoryButton(data: any) {
    const responsePost = await fetch(apiServerUrl + '/v1/category', {
      method: 'POST',
      body: new Blob([JSON.stringify(data)], { type: 'application/json' }),
    })
    if (!responsePost.ok) return false

    await categoryApiResult.refetch()
    if (categoryApiResult.error) return false

    return true
  }

  return [
    <Text key="category_board_text">Category</Text>,
    <InputDialog<CategoryBody>
      key="category_board_dialog"
      title="새로운 카테고리 추가"
      label="카테고리 이름을 입력하세요"
      placeholder="카테고리"
      submitName="categoryName"
      onSubmitSave={onClickAddCategoryButton}
    >
      <IconButton size="sm" variant="outline">
        <PiPlusBold color="black" />
      </IconButton>
    </InputDialog>,
  ]
}

function addTrashbin(
  categoryId: number,
  onClickDeleteCategoryButton: Function,
) {
  return (
    <AlertDialog onClick={() => onClickDeleteCategoryButton(categoryId)}>
      <IconButton size="sm" variant="ghost">
        <FaTrashCan color="black" />
      </IconButton>
    </AlertDialog>
  )
}

function getCategoryItems(
  categoryApiResult: IApiResult<Array<ICategory>>,
  categoryBundleApiResult: any,
  onChangeCategoryId: Function,
) {
  const categoryTable: Array<Array<ReactNode>> = []

  async function onClickDeleteCategoryButton(categoryId: number) {
    const responseDelete = await fetch(
      apiServerUrl + '/v1/category/' + categoryId,
      {
        method: 'DELETE',
      },
    )
    if (!responseDelete.ok) return false

    onChangeCategoryId(undefined)

    await categoryApiResult.refetch()
    if (categoryApiResult.error) return false

    return true
  }

  categoryApiResult.data.map((category) => {
    categoryTable.push([
      <Button
        key={`category_board_row_${category.id}`}
        size="md"
        variant="ghost"
        onClick={() => onChangeCategoryId(category.id)}
      >
        <Text fontSize={'17px'} color={'black'}>
          {category.categoryName}
        </Text>
      </Button>,
      addTrashbin(category.id, onClickDeleteCategoryButton),
    ])
  })

  return categoryTable
}

export default function CategoryBoard({
  categoryBundleState,
}: {
  categoryBundleState: any
}) {
  const categoryApiResult = useCategory()
  const [categoryBundleApiResult, categoryBundleApiProps] = categoryBundleState

  const categoryColumns = getCategoryColumns(categoryApiResult)
  const categoryItems = getCategoryItems(
    categoryApiResult,
    categoryBundleApiResult,
    categoryBundleApiProps.onChangeCategoryId,
  )

  return <ScrolledHalfBoard columns={categoryColumns} items={categoryItems} />
}
