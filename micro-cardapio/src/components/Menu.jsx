
const pratos = [
  { id: 1, nome: 'Hambúrguer artesanal', preco: 32.9, descricao: 'Hambúrguer com queijo, alface e tomate.' },
  { id: 2, nome: 'Pizza de mussarela', preco: 39.9, descricao: 'Pizza tradicional de mussarela.' },
  { id: 3, nome: 'Salada tropical', preco: 24.9, descricao: 'Salada fresca com frutas e folhas.' },
  { id: 4, nome: 'Suco natural', preco: 9.9, descricao: 'Suco natural de laranja.' },
];

export default function Menu() {
  function adicionarAoPedido(prato) {
    window.dispatchEvent(
      new CustomEvent('order:add', { detail: prato })
    );
  }

  return (
    <section style={{ color: '#1f2937' }}>
      <h2 style={{
        color: '#14532d',
        fontSize: '26px',
        marginBottom: '20px',
      }}>
        Nosso Cardápio
      </h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '16px',
      }}>
        {pratos.map((prato) => (
          <article key={prato.id} style={{
            padding: '20px',
            border: '1px solid #9ca3af',
            borderRadius: '12px',
            background: '#ffffff',
            color: '#1f2937',
            boxShadow: '0 3px 8px rgba(0,0,0,0.12)',
          }}>
            <h3 style={{
              color: '#14532d',
              fontSize: '19px',
              marginBottom: '8px',
            }}>
              {prato.nome}
            </h3>

            <p style={{
              color: '#374151',
              lineHeight: '1.5',
              marginBottom: '10px',
            }}>
              {prato.descricao}
            </p>

            <strong style={{
              display: 'block',
              color: '#111827',
              fontSize: '19px',
            }}>
              R$ {prato.preco.toFixed(2).replace('.', ',')}
            </strong>

            <button
              onClick={() => adicionarAoPedido(prato)}
              style={{
                display: 'block',
                width: '100%',
                marginTop: '15px',
                padding: '12px',
                border: 'none',
                borderRadius: '8px',
                background: '#14532d',
                color: '#ffffff',
                fontWeight: 'bold',
                cursor: 'pointer',
              }}
            >
              Adicionar ao pedido
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}
