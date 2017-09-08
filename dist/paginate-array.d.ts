export declare function paginateArray<T>(collection: T[], page?: number, numItems?: number): {
    currentPage: number;
    perPage: number;
    total: number;
    totalPages: number;
    data: T[];
};
