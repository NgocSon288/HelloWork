import { PagedFilterAndSortedRequest } from 'shared/services/dto/pagedFilterAndSortedRequest';

export interface PagedUserResultRequestDto extends PagedFilterAndSortedRequest {
    keyword: string
}
