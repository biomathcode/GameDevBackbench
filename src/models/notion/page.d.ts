// https://api.notion.com/v1/pages/page_id

export interface Page {
  id: string;
  properties: {
    title: {
      id: string;
      type: string;
      title: [
        {
          plain_text: string;
        }
      ];
    };
  };
}
