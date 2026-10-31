import Pedido from '../components/Pedido';

export default function Home() {
  return (
    <main
      style={{
        maxWidth: '900px',
        margin: '0 auto',
        padding: '40px 20px',
        fontFamily: 'Arial, sans-serif',
        background: '#f5f5f5',
        minHeight: '100vh',
      }}
    >
      <h1 style={{ color: '#176b45' }}>
        Restaurante - Meu Pedido
      </h1>

      <p>Acompanhe os itens que você escolheu.</p>

      <Pedido />
    </main>
  );
}