import Board from "../common/Board";

export default function Body() {
    const items = [
        {index: 1, court: "인천지방법원", seller: "채무자1", title: "부동산 매각공고", due: "2025.01.20", category: "부동산", file: "pdf"},
        {index: 2, court: "서울회생법원", seller: "채무자2", title: "채권 매각공고", due: "2025.01.20", category: "채권", file: "hwp"},
        {index: 3, court: "인천지방법원", seller: "채무자1", title: "부동산 매각공고", due: "2025.01.20", category: "부동산", file: "pdf"},
        {index: 4, court: "서울회생법원", seller: "채무자2", title: "채권 매각공고", due: "2025.01.20", category: "채권", file: "hwp"},
        {index: 5, court: "인천지방법원", seller: "채무자1", title: "부동산 매각공고", due: "2025.01.20", category: "부동산", file: "pdf"},
        {index: 6, court: "서울회생법원", seller: "채무자2", title: "채권 매각공고", due: "2025.01.20", category: "채권", file: "hwp"},
        {index: 7, court: "인천지방법원", seller: "채무자1", title: "부동산 매각공고", due: "2025.01.20", category: "부동산", file: "pdf"},
        {index: 8, court: "서울회생법원", seller: "채무자2", title: "채권 매각공고", due: "2025.01.20", category: "채권", file: "hwp"},
        {index: 9, court: "인천지방법원", seller: "채무자1", title: "부동산 매각공고", due: "2025.01.20", category: "부동산", file: "pdf"},
        {index: 10, court: "서울회생법원", seller: "채무자2", title: "채권 매각공고", due: "2025.01.20", category: "채권", file: "hwp"},
        {index: 11, court: "인천지방법원", seller: "채무자1", title: "부동산 매각공고", due: "2025.01.20", category: "부동산", file: "pdf"},
        {index: 12, court: "서울회생법원", seller: "채무자2", title: "채권 매각공고", due: "2025.01.20", category: "채권", file: "hwp"},
        {index: 13, court: "인천지방법원", seller: "채무자1", title: "부동산 매각공고", due: "2025.01.20", category: "부동산", file: "pdf"},
        {index: 14, court: "서울회생법원", seller: "채무자2", title: "채권 매각공고", due: "2025.01.20", category: "채권", file: "hwp"},
        {index: 15, court: "인천지방법원", seller: "채무자1", title: "부동산 매각공고", due: "2025.01.20", category: "부동산", file: "pdf"},
        {index: 16, court: "서울회생법원", seller: "채무자2", title: "채권 매각공고", due: "2025.01.20", category: "채권", file: "hwp"},
        {index: 17, court: "인천지방법원", seller: "채무자1", title: "부동산 매각공고", due: "2025.01.20", category: "부동산", file: "pdf"},
        {index: 18, court: "서울회생법원", seller: "채무자2", title: "채권 매각공고", due: "2025.01.20", category: "채권", file: "hwp"},
        {index: 19, court: "인천지방법원", seller: "채무자1", title: "부동산 매각공고", due: "2025.01.20", category: "부동산", file: "pdf"},
        {index: 20, court: "서울회생법원", seller: "채무자2", title: "채권 매각공고", due: "2025.01.20", category: "채권", file: "hwp"},
        {index: 21, court: "인천지방법원", seller: "채무자1", title: "부동산 매각공고", due: "2025.01.20", category: "부동산", file: "pdf"},
        {index: 22, court: "서울회생법원", seller: "채무자2", title: "채권 매각공고", due: "2025.01.20", category: "채권", file: "hwp"},
        {index: 23, court: "인천지방법원", seller: "채무자1", title: "부동산 매각공고", due: "2025.01.20", category: "부동산", file: "pdf"},
        {index: 24, court: "서울회생법원", seller: "채무자2", title: "채권 매각공고", due: "2025.01.20", category: "채권", file: "hwp"},
    ]

    return (
        <Board items={items}/>
    )
}