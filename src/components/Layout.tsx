import Head from 'next/head';
import { render } from '@9gustin/react-notion-render';

import { PageProps } from '../models/page-props';

const Layout = ({ children, notionPage }: PageProps) => (
  <div className="container mx-auto py-16 max-w-xl">
    <Head>
      <title>Page title</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header className="text-lg">{'sasigu.me'}</header>
    <main area-label="Main content" className="py-8 px-3">
      {children}
      <article>{notionPage && render(notionPage.results, true)}</article>
    </main>
    <footer area-label="Footer">
      <span>Made with 🍙 by Ryo Ando</span>
    </footer>
  </div>
);

export default Layout;
