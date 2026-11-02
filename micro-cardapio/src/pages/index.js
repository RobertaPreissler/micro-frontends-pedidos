

import Head from 'next/head';
import Menu from '../components/Menu';

export default function Home() {
  return (
    <>
      <Head>
        <title>Cardápio | Restaurante</title>
        <meta
          name="description"
          content="Confira nosso cardápio e escolha seus pratos."
        />
      </Head>

      <main>
        <Menu />
      </main>
    </>
  );
}
