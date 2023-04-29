export interface IPaginationOptions<T> {
  items: T[];
  totalItems: number;
  limit: number;
  currentPage: number;
  route?: string;
}

export interface IPaginationMeta {
  itemCount: number;

  totalItems: number;

  itemsPerPage: number;

  totalPages: number;

  currentPage: number;
}

export interface IPaginationLinks {
  first?: string;

  previous?: string;

  next?: string;

  last?: string;
}
