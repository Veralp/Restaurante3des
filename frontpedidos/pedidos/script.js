var produtos = [];
const pedido = {
    produtos: [],
};

api.get("/pedido/hoje")
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
        let pedido = document.createElement("tr");
        let status = p.dataEntrega != null ? "Concluído" : p.dataCozinha != null ? "Entrega" : "Cozinha";
        let btCozinha = `<button onclick="concluirCozinha(${p.id},${p.clienteId})">Concluir</button>`;
        let btEntrega = `<button onclick="concluirEntrega(${p.id})">Concluir</button>`;
        pedido.innerHTML = `
            <td data-label="Status:" ><input type="text" value=${status} class=${status} disabled></td>
            <td data-label="Id:" >${p.id}</td>
            <td data-label="Id do Cliente:">${p.clienteId}</td>
            <td data-label="Id do Motoboi:">${p.motoboyId}</td>
            <td data-label="Pedido:">${p.dataPedido.toString().slice(0, 10)} ${p.dataPedido.toString().slice(11, 16)}</td>
            <td data-label="Cozinha:">${p.dataCozinha != null ? p.dataCozinha.toString().slice(0, 10) : btCozinha} ${p.dataCozinha != null ? p.dataCozinha.toString().slice(11, 16) : ''}</td>
            <td data-label="Entrega:">${p.dataEntrega != null ? p.dataEntrega.toString().slice(0, 10) : p.dataCozinha != null ? btEntrega : ''} ${p.dataEntrega != null ? p.dataEntrega.toString().slice(11, 16) : ''}</td>            
            <td data-label="Valor do Pedido:">${p.valorPedido.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
            <td data-label="Valor da Entrega:">${p.valorEntrega.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
            <td data-label="Total:">${(p.valorEntrega + p.valorPedido).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
            <td data-label="Excluir:"><button onclick="excluir(${p.id})">-</button></td>
        `;
        corpo.appendChild(pedido);
        if (i >= 200) {
            return;
        }
    });
}

const concluirCozinha = (id, cliente) => {
    if (confirm(`Deseja alterar o status do pedido ${id} ?`)) {
        let dados = {
            id: id,
            dataCozinha: new Date()
        }
        if (cliente == 1) dados.dataEntrega = new Date();
        api.put(`/pedido`, dados)
            .then(() => {
                window.location.reload();
            })
            .catch(err => {
                console.log(err);
            });
    }
}
const concluirEntrega = (id) => {
    if (confirm(`Deseja alterar o status do pedido ${id} ?`)) {
        let dados = {
            id: id,
            dataEntrega: new Date()
        }
        api.put(`/pedido`, dados)
            .then(() => {
                window.location.reload();
            })
            .catch(err => {
                console.log(err);
            });
    }
}

const excluir = (id) => {
    if (confirm(`Deseja excluir o pedido ${id} ?`)) {
        api.delete(`/pedido/${id}`)
            .then(() => {
                window.location.reload();
            })
            .catch(err => {
                console.log(err);
            });
    }
}
