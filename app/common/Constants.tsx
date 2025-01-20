
export const apiServerUrl = "http://localhost:8080";

export interface ICategory {
    id: number,
    categoryName: string
}

export interface IBoard {
    id: number,
    court: string,
    seller: string,
    title: string,
    uploaded: string,
    due: string,
    fileLink: string,
    telephoneNumber: string,
    categories: Array<ICategory>
}

export interface IApiResult<T> {
    data: T,
    error: any,
    isLoading: boolean,
    refetch: Function
}

export interface ICategoryResource {
    categoryId: number,
    keyword: string
}

export interface ICategoryBundle {
    category: ICategory,
    categoryResources: Array<ICategoryResource>
}