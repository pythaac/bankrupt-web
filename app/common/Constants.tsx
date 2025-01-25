
export const apiServerUrl = "http://localhost:8100";

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
    refetch: () => Promise<any>
}

export interface ICategoryResource {
    categoryResourceId: number
    categoryId: number,
    keyword: string
}

export interface ICategoryBundle {
    category: ICategory,
    categoryResources: Array<ICategoryResource>
}

export interface ISyncTime {
    syncTime: Date
}