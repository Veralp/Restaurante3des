var produtos = [];
const pedido = {
    produtos: [],
};

api.get("/pedido")
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
        pedido.innerHTML = `
            <td data-label="Id:" >${p.id}</td>
            <td data-label="Id do Cliente:">${p.clienteId}</td>
            <td data-label="Id do Motoboi:">${p.motoboyId}</td>
            <td data-label="Pedido:">${p.dataPedido.toString().slice(0,10)} ${p.dataPedido.toString().slice(11,16)}</td>
            <td data-label="Cozinha:">${p.dataCozinha != null?p.dataCozinha.toString().slice(0,10):''} ${p.dataCozinha != null?p.dataCozinha.toString().slice(11,16):''}</td>
            <td data-label="Entrega:">${p.dataEntrega != null?p.dataEntrega.toString().slice(0,10):''} ${p.dataEntrega != null?p.dataEntrega.toString().slice(11,16):''}</td>            
            <td data-label="Valor do Pedido:">${p.valorPedido.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
            <td data-label="Valor da Entrega:">${p.valorEntrega.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
            <td data-label="Total:">${(p.valorEntrega + p.valorPedido).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
        `;      
        corpo.appendChild(pedido);
        if(i >= 200){
            return;
        }
    });
}
