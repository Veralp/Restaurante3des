var produtos = [];
const pedido = {
    total: 0,
    produtos: [],
};

api.get("/cardapio")
    .then(resp => {
        produtos = resp.data;
    })
    .then(() => {
        listarProdutos();
    })
    .catch(err => {
        console.log(err);
    });

const listarProdutos = () => {
    const cardapio = document.querySelector("#cardapio");
    const prato = document.querySelector("#prato");
    produtos.forEach((produto, indice) => {
        let nPrato = prato.cloneNode(true);
        nPrato.classList.remove("oculto");
        nPrato.childNodes[3].childNodes[1].innerHTML = produto.produto;
        nPrato.childNodes[3].childNodes[3].innerHTML = produto.descricao;
        nPrato.childNodes[3].childNodes[5].innerHTML = produto.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        nPrato.childNodes[3].childNodes[9].setAttribute("onclick", `adicionarAoCarrinho(${indice})`);
        cardapio.appendChild(nPrato);
    });
}

const adicionarAoCarrinho = (indice) => {
    const produtoNoCarrinho = pedido.produtos.find(produto => produto.id === produtos[indice].id);
    if (produtoNoCarrinho) {
        produtoNoCarrinho.quantidade++;
    } else {
        produtos[indice].quantidade = 1;
        pedido.produtos.push(produtos[indice]);
    }
    reconstruirCarrinho();
}

const reconstruirCarrinho = () => {
    const carrinho = document.querySelector("#carrinho");
    carrinho.innerHTML = "";
    pedido.total = 0;
    pedido.produtos.forEach((prod, i) => {
        const prato = document.querySelector("#prato");
        let nPrato = prato.cloneNode(true);
        nPrato.classList.remove("oculto");
        nPrato.childNodes[3].childNodes[1].innerHTML = prod.produto;
        nPrato.childNodes[3].childNodes[3].innerHTML = prod.descricao;
        nPrato.childNodes[3].childNodes[5].innerHTML = prod.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        nPrato.childNodes[3].childNodes[7].classList.remove("oculto");
        nPrato.childNodes[3].childNodes[7].innerHTML = "Quantidade: " + prod.quantidade;
        nPrato.childNodes[3].childNodes[9].innerHTML = "Remover";
        nPrato.childNodes[3].childNodes[9].setAttribute("onclick", `parentNode.parentNode.remove(this);removerDoCarrinho(${i})`);
        carrinho.appendChild(nPrato);
        pedido.total += prod.preco * prod.quantidade;
    });
    const botoes = document.createElement("div");
    botoes.innerHTML = "Total: R$";
    const totalPedido = document.createElement("input");
    totalPedido.setAttribute("type", "number");
    totalPedido.setAttribute("value", pedido.total.toFixed(2));
    const enviarPedido = document.createElement("button");
    const limpar = document.createElement("button");
    enviarPedido.innerHTML = "Enviar Pedido";
    limpar.innerHTML = "Limpar Pedido";
    enviarPedido.setAttribute("onclick", "enviarPedido()");
    limpar.setAttribute("onclick", "pedido.produtos = [];carrinho.innerHTML = '';");
    botoes.appendChild(totalPedido);
    botoes.appendChild(enviarPedido);
    botoes.appendChild(limpar);
    carrinho.appendChild(botoes);
}

const removerDoCarrinho = (indice) => {
    pedido.produtos.splice(indice, 1);
    reconstruirCarrinho();
}