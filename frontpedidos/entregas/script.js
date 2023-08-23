var produtos = [];
const pedido = {
    produtos: [],
};

api.get("/pedido/entrega")
    .then(resp => {
        produtos = resp.data;
    })
    .then(() => {
        listarPedidos();
    })
    .catch(err => {
        console.log(err);
    });

const listarPedidos = () => {
    const corpo = document.querySelector("#tcorpo");
    produtos.forEach((p, i) => {
        let cabecalho = document.createElement("tr");
        cabecalho.innerHTML = `
            <th>Id</th>
            <th>Cliente</th>
            <th>Motoboy</th>
            <th>Pedido</th>
            <th>Cozinha</th>
            <th>Valor</th>
            <th>Taxa de Entrega</th>
            <th>Total</th>
        `;
        let pedido = document.createElement("tr");
        pedido.innerHTML = `
            <td data-label="Id:" >${p.id}</td>
            <td data-label="Id do Cliente:">${p.clienteId}</td>
            <td data-label="Id do Motoboi:">${p.motoboyId}</td>
            <td data-label="Pedido:">${p.dataPedido.toString().slice(0, 10)} ${p.dataPedido.toString().slice(11, 16)}</td>
            <td data-label="Cozinha:">${p.dataCozinha.toString().slice(0, 10)} ${p.dataCozinha.toString().slice(11, 16)}</td>
            <td data-label="Valor do Pedido:">${p.valorPedido.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
            <td data-label="Valor da Entrega:">${p.valorEntrega.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
            <td data-label="Total:">${(p.valorEntrega + p.valorPedido).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
        `;
        corpo.appendChild(cabecalho);
        corpo.appendChild(pedido);
        let clienteCabecalho = document.createElement("tr");
        clienteCabecalho.innerHTML = `
            <th>Cliente</th>
            <th colspan='5'>Endereço</th>
            <th colspan='2'>Telefone</th>
        `;
        corpo.appendChild(clienteCabecalho);
        let cliente = document.createElement("tr");
        cliente.classList.add("item");
        cliente.innerHTML = `
            <td data-label="Cliente:">${p.cliente.nome}</td>
            <td data-label="Endereço:" colspan='5'>CEP: ${p.cliente.enderecoCep}, nº ${p.cliente.enderecoNumero}, complemento: ${p.cliente.enderecoComplemento}</td>
            <td data-label="Telefone:" colspan='2'>${p.cliente.telefones}</td>
        `;
        corpo.appendChild(cliente);
        let cabecalho2 = document.createElement("tr");
        cabecalho2.innerHTML = `
            <th>Item Id</th>
            <th>Quantidade</th>
            <th  colspan='6'>Produto</th>
        `;
        corpo.appendChild(cabecalho2);
        p.itens.forEach((i, j) => {

            let item = document.createElement("tr");
            item.classList.add("item");
            item.innerHTML = `
                <td data-label="Id do Item:">${i.cardapio.id}</td>
                <td data-label="Quantidade:">${i.quantidade}</td>
                <td data-label="Produto:"  colspan='6'>${i.cardapio.produto}</td>
            `;
            corpo.appendChild(item);
        });
        if (i >= 200) {
            return;
        }
    });
}
