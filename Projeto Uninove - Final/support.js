const baseURL = 'https://684231a4e1347494c31c18c9.mockapi.io/ProjetoIntegrador';

function CadastrarCliente(event) {
  event.preventDefault();

  const Nome = document.getElementById('NomeCliente').value;
  const Email = document.getElementById('EmailCliente').value;
  const Celular = document.getElementById('CelularCliente').value;
  const Mensagem = document.getElementById('MensagemCliente').value;

  fetch(baseURL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ Nome, Email, Celular, Mensagem })
  })
    .then(response => response.json())
    .then(() => {
      document.getElementById('Formulario').reset();
    });
}