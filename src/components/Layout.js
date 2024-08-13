// components/Layout.js
import Head from 'next/head';
import Link from 'next/link';
import NavBarComp from './NavBarComp';
import Footer from './Footer';
const Layout = ({ children, title = 'Orai Names' }) => {
  return (
    <div >
      <Head>
        <title>{title}</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <header>
<NavBarComp title={title}/>
      </header>
      <main className='min-h-screen'>{children}</main>
<Footer/>
    </div>
  );
};

export default Layout;
