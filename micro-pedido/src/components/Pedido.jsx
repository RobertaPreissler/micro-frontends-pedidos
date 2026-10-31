
import { useEffect, useState } from 'react';

export default function Pedido() {
  const [itens, setItens] = useState([]);

  useEffect(() => {
    function receberPrato(event) {
      setItens((anteriores) => [...anteriores, event.detail]);
    }

    window.addEventListener('order:add', receberPrato);

    return () => {
      window.removeEventListener('order:add', receberPrato);
    };
  }, []);

  const total = itens.reduce((soma, item) => soma + item.preco, 0);

  return (
    <section style={{ color: '#1f2937' }}>
      <h2 style={{
        color: '#14532d',
        fontSize: '24px',
        marginTop: 0,
        marginBottom: '20px',
      }}>
        Meu Pedido
      </h2>

      {itens.length === 0 ? (
        <p style={{ color: '#374151' }}>
          Nenhum item adicionado ainda.
        </p>
      ) : (
        <>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '14px',
          }}>
            {itens.map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '12px',
                  borderRadius: '8px',
                  background: '#f3f4f6',
                  border: '1px solid #d1d5db',
                  color: '#1f2937',
                }}
              >
                <span>{item.nome}</span>

                <strong style={{
                  color: '#14532d',
                  whiteSpace: 'nowrap',
                }}>
                  R$ {item.preco.toFixed(2).replace('.', ',')}
                </strong>
              </div>
            ))}
          </div>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            marginTop: '22px',
            padding: '16px',
            borderRadius: '8px',
            background: '#14532d',
            color: '#ffffff',
          }}>
            <span>Total do pedido</span>

            <strong style={{ fontSize: '23px', color: '#ffffff' }}>
              R$ {total.toFixed(2).replace('.', ',')}
            </strong>
          </div>
        </>
      )}
    </section>
  );
}
