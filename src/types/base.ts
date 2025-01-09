/**
 * Base Implementation For InvertedTech Api Responses that return a paginated list of entities
 * @type {TRecord}
 * @typedef {object} RecordResponse<TRecord>
 * @property {TRecord[]} Records - List of the records of type TEntity that are returned by the api
 * @property {number} PageOffsetStart -
 * @property {number} PageOffsetEnd -
 * @property {number} PageTotalItems - Amount of records to return per page
 */
export type RecordResponse<TRecord> = {
	Records: TRecord[];
	PageOffsetStart: number;
	PageOffsetEnd: number;
	PageTotalItems: number;
};
