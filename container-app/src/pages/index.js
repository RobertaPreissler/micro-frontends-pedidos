import Head from 'next/head';
import { lazy, Suspense } from 'react';

const Menu = lazy(() => import('cardapio/Menu'));
const Pedido = lazy(() => import('pedido/Pedido'));

export default function Home() {
  return (
    <>
      <Head>
        <title>Restaurante | Cardápio e Pedidos</title>
        <meta
          name="description"
          content="Escolha seus pratos e acompanhe seu pedido."
        />
      </Head>

      <main
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '40px 20px',
          fontFamily: 'Arial, sans-serif',
          background: '#f5f5f5',
          minHeight: '100vh',
        }}
      >
        <header style={{ textAlign: 'center', marginBottom: '35px' }}>
          <h1 style={{ color: '#176b45' }}>
            Restaurante
          </h1>
          <p>Escolha seus pratos e monte seu pedido!</p>
        </header>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr',
            gap: '25px',
            alignItems: 'start',
          }}
        >
          <section>
            <Suspense fallback={<p>Carregando cardápio...</p>}>
              <Menu />
            </Suspense>
          </section>

          <aside
            style={{
              background: 'white',
              padding: '20px',
              borderRadius: '12px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
            }}
          >
            <Suspense fallback={<p>Carregando pedido...</p>}>
              <Pedido />
            </Suspense>
          </aside>
        </div>
      </main>
    </>
  );
}