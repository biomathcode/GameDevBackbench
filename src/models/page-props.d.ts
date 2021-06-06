import { ReactNode } from 'react';

// Not used in actual component

export interface Result {
  object: string;
  id: string;
  created_time: string;
  last_edited_time: string;
  has_children: boolean;
  type: string;
  paragraph: Paragraph;
}

export interface Paragraph {
  text: Text[];
}

export interface Text {
  type: string;
  text: Text2;
  annotations: Annotations;
  plain_text: string;
  href: any;
}

export interface Text2 {
  content: string;
  link: any;
}

export interface Annotations {
  bold: boolean;
  italic: boolean;
  strikethrough: boolean;
  underline: boolean;
  code: boolean;
  color: string;
}

export interface PageProps {
  children: ReactNode;
  notionPage: {
    object: string;
    results: Result[];
    next_cursor: any;
    has_more: boolean;
  };
}
