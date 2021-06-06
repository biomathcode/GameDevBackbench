import { Blocks } from './blocks';
import { Page } from './page';

export interface NotionPage {
  page: Page;
  blocks: Blocks;

  // added because page data is too nested
  id: string;
  title: string;
}
