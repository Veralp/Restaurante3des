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
        alert("Erro ao carregar cardápio");
        console.log(err);
    });
api.get("/motoboy")
    .then(resp => {
        const motoboy = document.querySelector("#motoboyId");
        resp.data.forEach((m) => {
            const option = document.createElement("option");
            option.setAttribute("value", m.id);
            option.innerHTML = m.nome;
            motoboy.appendChild(option);
        });
    })
    .catch(err => {
        alert("Erro ao carregar motoboys");
        console.log(err);
    });

const buscarClientes = (nome) => {
    api.get("/cliente/" + nome)
        .then(resp => {
            const cliente = document.querySelector("#clienteId");
            cliente.options.length = 0;
            resp.data.forEach((c) => {
                const option = document.createElement("option");
                option.setAttribute("value", c.id);
                option.innerHTML = c.nome;
                cliente.appendChild(option);
            });
        })
        .catch(err => {
            alert("Erro ao carregar clientes");
            console.log(err);
        });
}

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
    const concluir = document.createElement("button");
    const limpar = document.createElement("button");
    concluir.innerHTML = "Concluir Pedido";
    limpar.innerHTML = "Limpar Carrinho";
    concluir.setAttribute("onclick", "concluir()");
    limpar.setAttribute("onclick", "pedido.produtos = [];carrinho.innerHTML = '';");
    botoes.appendChild(totalPedido);
    botoes.appendChild(concluir);
    botoes.appendChild(limpar);
    carrinho.appendChild(botoes);
}

const removerDoCarrinho = (indice) => {
    pedido.produtos.splice(indice, 1);
    reconstruirCarrinho();
}

const concluir = () => {
    const modal = document.querySelector("#modal");
    modal.classList.remove("oculto");
    const form = document.querySelector("#novoPedido");
    form.valorPedido.value = pedido.total;
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const dados = {
            clienteId: parseInt(form.clienteId.value),
            motoboyId: parseInt(form.motoboyId.value),
            valorPedido: parseFloat(form.valorPedido.value),
            valorEntrega: parseFloat(form.valorEntrega.value),
        }
        if (dados.clienteId == 1 && dados.motoboyId != 1) {
            alert("Escolha um cliente válido");
        }else{
            api.post("/pedido", dados)
                .then(resp => {
                    if (adicionarItens(resp.data.id)) {
                        window.location.href = "../pedidos";
                    }
                })
                .catch(err => {
                    alert("Erro ao cadastrar pedido");
                    console.log(err);
                });
        }
    });
}

const adicionarItens = (idGerado) => {
    pedido.produtos.forEach((prod) => {
        const dados = {
            pedidoId: parseInt(idGerado),
            cardapioId: parseInt(prod.id),
            quantidade: parseInt(prod.quantidade),
            valor: parseFloat(prod.preco),
        }
        console.log(idGerado);
        console.log(dados);
        api.post("/itens", dados)
            .then(resp => {
                console.log("Item adicionado com sucesso");
            })
            .catch(err => {
                alert("Erro ao cadastrar item");
                console.log(err);
            });
    });
    return true;
}
