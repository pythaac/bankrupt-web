
export const apiServerUrl = "http://localhost:8080";

export interface Category {
    id: number,
    categoryName: string
}

export interface Board {
    id: number,
    court: string,
    seller: string,
    title: string,
    uploaded: string,
    due: string,
    fileLink: string,
    telephoneNumber: string,
    categories: Array<Category>
}

export interface ApiResult<T> {
    data: T,
    error: any,
    isLoading: boolean,
    refetch: Function
}