import { PagedFilterAndSortedRequest } from 'shared/services/dto/pagedFilterAndSortedRequest';

export interface PagedRoleResultRequestDto extends PagedFilterAndSortedRequest  {
    keyword: string
}
