import { ReactNode } from 'react';
import { NotionPage } from './notion';

export interface LayoutProps {
  children?: ReactNode;
  notionPage: NotionPage;
}
