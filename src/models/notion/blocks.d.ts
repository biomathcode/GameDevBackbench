// https://api.notion.com/v1/blocks/block_id/children

export interface Blocks {
  object: string;
  results: Result[];
  next_cursor: any;
  has_more: boolean;
}
