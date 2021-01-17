export interface Province {
    Type: number,
    SolrID: string,
    ID: number,
    Title: string,
    STT: number,
    Created?: Date | null,
    UpdatedAt?: Date | null,
    TotalDoanhNghiep: number
}

export interface LTSItem {
    LtsItem: Province[]
}