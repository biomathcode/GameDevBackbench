import Layout from '../components/Layout';
import { LayoutProps } from 'models';
import { getPage } from '@/lib/notion/get-page';
import { GetStaticProps } from 'next';
const IndexPage = (props: LayoutProps) => <Layout {...props}></Layout>;

export default IndexPage;

export const getStaticProps: GetStaticProps<LayoutProps> = async () => {
  const id = process.env.NOTION_PAGE_ID;
  if (id) {
    const notionPage = await getPage(id);
    return {
      props: {
        notionPage,
      },
      revalidate: 30,
    };
  } else {
    return {
      notFound: true,
    };
  }
};
