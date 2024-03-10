class Cliente {
  constructor(nome, telefone, email, animal, servico) {
      this.nome = nome;
      this.telefone = telefone;
      this.email = email;
      this.animal = animal;
      this.servico = servico;
  }
}

const form = document.getElementById('petshopForm');
const listaClientes = document.getElementById('lista-clientes');
const clientes = [];

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const nome = form.querySelector('#nome').value;
  const telefone = form.querySelector('#telefone').value;
  const email = form.querySelector('#email').value;
  const animal = form.querySelector('#animal').value;
  const servico = form.querySelector('#servico').value;

  const novoCliente = new Cliente(nome, telefone, email, animal, servico);
  clientes.push(novoCliente);

  atualizarListaClientes();
  form.reset();
});

function atualizarListaClientes() {
  listaClientes.innerHTML = '';

  clientes.forEach((cliente, index) => {
      const li = document.createElement('li');
      li.innerHTML = `<strong>${cliente.nome}</strong> - Telefone: ${cliente.telefone}, Email: ${cliente.email}, Animal: ${cliente.animal}, Serviço: ${cliente.servico}
          <button onclick="editarCliente(${index})">Editar</button>
          <button onclick="excluirCliente(${index})">Excluir</button>`;
      listaClientes.appendChild(li);
  });
}

function editarCliente(index) {
  const clienteParaEditar = clientes[index];
  form.querySelector('#nome').value = clienteParaEditar.nome;
  form.querySelector('#telefone').value = clienteParaEditar.telefone;
  form.querySelector('#email').value = clienteParaEditar.email;
  form.querySelector('#animal').value = clienteParaEditar.animal;
  form.querySelector('#servico').value = clienteParaEditar.servico;

  clientes.splice(index, 1);
  atualizarListaClientes();
}

function excluirCliente(index) {
  clientes.splice(index, 1);
  atualizarListaClientes();
}


