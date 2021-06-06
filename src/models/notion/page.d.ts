// https://api.notion.com/v1/pages/page_id

export interface Page {
  object: string;
  id: string;
  created_time: string;
  last_edited_time: string;
  parent: {
    type: string;
    page_id: string;
  };
  archived: boolean;
  properties: {
    title: {
      id: string;
      type: string;
      title: [
        {
          type: string;
          text: {
            content: string;
            link: any;
          };
          annotations: {
            bold: boolean;
            italic: boolean;
            strikethrough: boolean;
            underline: boolean;
            code: boolean;
            color: string;
          };
          plain_text: string;
          href: any;
        }
      ];
    };
  };
}
