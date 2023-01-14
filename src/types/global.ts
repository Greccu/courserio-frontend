export interface PagedResult<T> {
  title: string,
  pageSize: number,
  totalResults: number,
  totalPageNumber: number,
  currentPageNumber: number,
    data: T[]
}
