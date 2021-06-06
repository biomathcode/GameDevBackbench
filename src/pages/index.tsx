import { PageProps } from '../models/page-props';
import Layout from '../components/Layout';
import notion from 'lib/notion/client';

const IndexPage = (props: PageProps) => <Layout {...props}></Layout>;

export default IndexPage;

export async function getStaticProps() {
  const pageId = process.env.NOTION_PAGE_ID;

  const result = await notion.blocks.children.list({
    block_id: pageId,

    // Max is 100
    page_size: 100,
  });

  return {
    props: {
      notionPage: result,
    },
  };
}
