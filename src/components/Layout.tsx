import Head from 'next/head';
import { render } from '@9gustin/react-notion-render';
import { LayoutProps } from 'models';

const Layout = ({ notionPage }: LayoutProps) => (
  <div className="container mx-auto max-w-xl flex flex-col gap-4 py-8 px-3">
    <Head>
      <title>{(notionPage && notionPage.title) ?? 'No title'}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <main area-label="Main content">
      <article>
        <h1 className="text-4xl font-bold mt-6">
          {(notionPage && notionPage.title) ?? 'No title'}
        </h1>
        {notionPage && render(notionPage.blocks.results, true)}
      </article>
    </main>
    <hr className="my-8" />
    <footer area-label="Footer">
      <span>Made with Notion</span>
    </footer>
  </div>
);

export default Layout;
