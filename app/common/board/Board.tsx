'use client'

import {
  Box,
  Table,
  HStack,
  createListCollection,
  Text,
  Link,
  VStack,
} from '@chakra-ui/react'
import {
  PaginationNextTrigger,
  PaginationPageText,
  PaginationPrevTrigger,
  PaginationRoot,
} from '@/components/ui/pagination'

import styles from './board.module.css'
import Select from '../Select'
import { apiServerUrl, IBoard, ICategory } from '../Constants'

function getTableHeader() {
  return (
    <Table.Header className={styles.table_header}>
      <Table.Row>
        <Table.ColumnHeader>번호</Table.ColumnHeader>
        <Table.ColumnHeader>법원</Table.ColumnHeader>
        <Table.ColumnHeader>판매자</Table.ColumnHeader>
        <Table.ColumnHeader>제목</Table.ColumnHeader>
        <Table.ColumnHeader>마감기한</Table.ColumnHeader>
        <Table.ColumnHeader>카테고리</Table.ColumnHeader>
        <Table.ColumnHeader>조회수</Table.ColumnHeader>
        <Table.ColumnHeader>파일</Table.ColumnHeader>
      </Table.Row>
    </Table.Header>
  )
}

function getFilter({
  categories,
  categoryIdState,
  pageSizeState,
}: {
  categories: Array<ICategory>
  categoryIdState: any
  pageSizeState: any
}) {
  const [, setCategoryId] = categoryIdState
  const [, setPageSize] = pageSizeState
  const pageSizeList = [5, 10, 15]

  function getKey(element: any) {
    return element.value
  }

  const itemCollectionCategory = createListCollection({
    items: categories.map((category) => ({
      label: category.categoryName,
      value: category.id,
    })),
  })

  const itemCollectionPageSize = createListCollection({
    items: pageSizeList.map((size) => ({
      label: size,
      value: size,
    })),
  })

  function onValueChange(value: Array<number>) {
    setCategoryId(value.length == 0 ? NaN : value.at(0))
  }

  return (
    <Table.Body>
      <Table.Row key="categorySelect" className={styles.table_row}>
        <Table.Cell> {/* index */} </Table.Cell>
        <Table.Cell> {/* court */} </Table.Cell>
        <Table.Cell> {/* seller */} </Table.Cell>
        <Table.Cell> {/* title */} </Table.Cell>
        <Table.Cell> {/* due */} </Table.Cell>
        <Table.Cell className={styles.table_component}>
          <Select
            itemCollection={itemCollectionCategory}
            getKey={getKey}
            onValueChange={onValueChange}
          />
        </Table.Cell>
        <Table.Cell> {/* views */} </Table.Cell>
        <Table.Cell className={styles.table_component}>
          <Select
            itemCollection={itemCollectionPageSize}
            getKey={getKey}
            onValueChange={setPageSize}
          />
        </Table.Cell>
      </Table.Row>
    </Table.Body>
  )
}

function getTableBody(items: Array<IBoard>) {
  async function OpenPdf(fileLink: string) {
    const regex = /file=(.*)&/

    const file = regex.exec(fileLink)![1]
    const fileName = fileLink.split('downFile=')[1]

    try {
      const responsePdf = await fetch(
        apiServerUrl + `/v1/file/pdf?file=${file}&fileName=${fileName}`,
      )
      if (!responsePdf.ok) throw new Error('파일 다운로드 실패')

      const blob = await responsePdf.blob()
      const blobUrl = window.URL.createObjectURL(blob)

      // PDF 뷰어에서 열기
      window.open(blobUrl, '_blank') // 새 탭에서 PDF 열기
    } catch (error) {
      console.error('PDF 열기 오류:', error)
    }
  }

  async function downloadHwp(fileLink: string) {
    const regex = /file=(.*)&/

    const file = regex.exec(fileLink)![1]
    const fileName = fileLink.split('downFile=')[1]

    try {
      const responseHwp = await fetch(
        apiServerUrl + `/v1/file/hwp?file=${file}&fileName=${fileName}`,
      )
      if (!responseHwp.ok) throw new Error('파일 다운로드 실패')

      const blob = await responseHwp.blob()
      const url = window.URL.createObjectURL(blob)

      // 강제 다운로드 실행
      const a = document.createElement('a')
      a.href = url
      a.download = fileName // 정상적인 한글 파일명 적용
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)

      window.URL.revokeObjectURL(url)
    } catch (error) {
      console.error('다운로드 오류:', error)
    }
  }

  return (
    <Table.Body>
      {items.map((item) => (
        <Table.Row key={item.id} className={styles.table_row}>
          <Table.Cell>{item.id}</Table.Cell>
          <Table.Cell>{item.court}</Table.Cell>
          <Table.Cell>{item.seller}</Table.Cell>
          <Table.Cell>{item.title}</Table.Cell>
          <Table.Cell>{item.due}</Table.Cell>
          <Table.Cell>
            <Text>
              {item.categories
                .map((category) => category.categoryName)
                .join(',')}
            </Text>
          </Table.Cell>
          <Table.Cell>{item.views}</Table.Cell>
          <Table.Cell>
            {item.fileLink.endsWith('.pdf') ? (
              <Link onClick={() => OpenPdf(item.fileLink)} color="blue">
                pdf
              </Link>
            ) : (
              <Link onClick={() => downloadHwp(item.fileLink)} color="blue">
                hwp
              </Link>
            )}
          </Table.Cell>
        </Table.Row>
      ))}
    </Table.Body>
  )
}

export default function Board({
  boards,
  totalCount,
  categories,
  pageState,
  categoryIdState,
  pageSizeState,
}: {
  boards: Array<IBoard>
  totalCount: number
  categories: Array<ICategory>
  pageState: any
  categoryIdState: any
  pageSizeState: any
}) {
  const [page, setPage] = pageState
  const [pageSize] = pageSizeState

  return (
    <VStack>
      <Table.Root unstyled className={styles.table} textOverflow="ellipsis">
        {getTableHeader()}
        {getFilter({ categories, categoryIdState, pageSizeState })}
        {getTableBody(boards)}
      </Table.Root>
      <Box>
        <PaginationRoot
          page={page}
          count={totalCount}
          pageSize={pageSize}
          onPageChange={(e) => setPage(e.page)}
        >
          <HStack wrap="wrap">
            <PaginationPageText format="long" flex="1" color="black" />
            <PaginationPrevTrigger color="black" />
            <PaginationNextTrigger color="black" />
          </HStack>
        </PaginationRoot>
      </Box>
    </VStack>
  )
}
