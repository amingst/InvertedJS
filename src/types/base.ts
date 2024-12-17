export type RecordResponse<TRecord> = {
    Records: TRecord[];
    PageOffsetStart: number;
    PageOffsetEnd: number;
    PageTotalItems: string;
}