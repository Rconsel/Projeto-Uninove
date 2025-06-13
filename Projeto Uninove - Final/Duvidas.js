const baseURL = 'https://684231a4e1347494c31c18c9.mockapi.io/ProjetoIntegrador';

function MostrarPagina(Pagina){
  document.querySelectorAll('.pagina').forEach(el => el.hidden = true);
  document.getElementById(Pagina).hidden = false;
  
  if(Pagina == 'Mostrar'){
    MostrarFormularios();
  }  
  
}

function MostrarFormularios(){
  fetch(baseURL)
    .then(response => response.json())
    .then(data=>{
      const tbody = document.getElementById('MensagensClientes');
      tbody.innerHTML = '';
      
      data.forEach(user =>{
        const linha = `
          <tr>
            <td>${user.Nome}</td>
            <td>${user.Email}</td>
            <td>${user.Celular}</td>
            <td>${user.Mensagem}</td>
          </tr>
        `;
        tbody.innerHTML+=linha;
      });
  }); 
} 