// components/Layout.js
import Head from 'next/head';
import Link from 'next/link';
import NavBarComp from './NavBarComp';
import Footer from './Footer';
import { ChainProvider } from '@cosmos-kit/react';
import { chains, assets } from 'chain-registry';
import { wallets } from '@cosmos-kit/keplr';
 
// Import this in your top-level route/layout
import "@interchain-ui/react/styles";

const Layout = ({ children, title = 'Orai Names' }) => {
  return (
<ChainProvider
      chains={chains} // supported chains
      assetLists={assets} // supported asset lists
      wallets={wallets} // supported wallets
    // required if `wallets` contains mobile wallets
    >
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
    </ChainProvider>
  );
};

export default Layout;
