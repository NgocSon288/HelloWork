import { PagedFilterAndSortedRequest } from 'shared/services/dto/pagedFilterAndSortedRequest';

export interface PagedTenantResultRequestDto extends PagedFilterAndSortedRequest {
    keyword: string
}
