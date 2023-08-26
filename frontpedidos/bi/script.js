var pedidos = [];
var filtrados = [];
var corPri = '#300d28';
var corSec = '#70615c';
var corTer = '#8ca38b';
var corQua = '#f7eeaa';
var corQui = '#edb552';

api.get("/pedido")
    .then(resp => {
        pedidos = resp.data;
    })
    .then(() => {
        valoresIniciais();
        inputDatas();
        carregar();
    })
    .catch(err => {
        console.log(err);
    });

const carregar = () => {
    const charts = document.querySelector("#charts");
    charts.innerHTML = "";
    novoGrafico('chartTipos');
    novoGrafico('chartMotoboys');
    novoGrafico('chartDia');
    const cards = document.querySelector("#cards");
    cards.innerHTML = "";
    listarTodos();
    chartTipos();
    chartMotoboys();
    chartDia();
    estatisticas();
}

const valoresIniciais = () => {
    filtrados = [];
    pedidos.forEach((p) => {
        if (p.dataEntrega != null && p.dataCozinha != null) {
            filtrados.push(p);
        }
    });
    pedidos = [];
    filtrados.forEach((p) => {
        pedidos.push(p);
    });
}

const listarTodos = () => {
    const corpo = document.querySelector("#tcorpo");
    filtrados.forEach((p, i) => {
        let pedido = document.createElement("tr");
        pedido.innerHTML = `
                    <td data-label="Id:" >${p.id}</td>
                    <td data-label="Id do Cliente:">${p.clienteId}</td>
                    <td data-label="Id do Motoboi:">${p.motoboyId}</td>
                    <td data-label="Pedido:">${p.dataPedido.toString().slice(0, 10)} ${p.dataPedido.toString().slice(11, 16)}</td>
                    <td data-label="Cozinha:">${p.dataCozinha.toString().slice(0, 10)} ${p.dataCozinha.toString().slice(11, 16)}</td>
                    <td data-label="Entrega:">${p.dataEntrega.toString().slice(0, 10)} ${p.dataEntrega.toString().slice(11, 16)}</td>
                    <td data-label="Valor do Pedido:">${p.valorPedido.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
                    <td data-label="Valor da Entrega:">${p.valorEntrega.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
                    <td data-label="Total:">${(p.valorEntrega + p.valorPedido).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</td>
                `;
        corpo.appendChild(pedido);

    });
}

const diferencaMinutos = (data1, data2) => {
    let diferenca = data1.getTime() - data2.getTime();
    let minutos = diferenca / 1000 / 60;
    return minutos;
}

//Gráficos
const novoGrafico = (id) => {
    const cards = document.querySelector("#charts");
    const card = document.createElement("div");
    card.classList.add("chart");
    card.innerHTML = `<canvas id="${id}"></canvas>`;
    cards.appendChild(card);
}

const chartTipos = () => {
    let tipos = ["Entregas", "Local"];
    let contEntregas = 0;
    let contLocal = 0;
    filtrados.forEach((p) => {
        if (p.motoboyId == 1) {
            contLocal++;
        } else {
            contEntregas++;
        }
    });
    let pedidosTipos = [contEntregas, contLocal];
    let ctx = document.getElementById('chartTipos').getContext('2d');
    let chart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: tipos,
            datasets: [{
                label: 'Pedidos por tipo',
                backgroundColor: [corPri, corTer],
                borderColor: [corPri, corSec],
                data: pedidosTipos
            }]
        },
        options: {
            responsive: true,
        }
    });
}

const chartMotoboys = () => {
    let motoboys = [];
    let pedidosMotoboys = [];
    filtrados.forEach((p) => {
        if (p.motoboyId != 1) {
            if (motoboys.indexOf(p.motoboyId) == -1) {
                motoboys.push(p.motoboyId);
            }
        }
    });
    motoboys.forEach((p) => {
        let contador = 0;
        filtrados.forEach((p2) => {
            if (p2.motoboyId == p) {
                contador++;
            }
        });
        pedidosMotoboys.push(contador);
    });
    let ctx = document.getElementById('chartMotoboys').getContext('2d');
    let chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: motoboys,
            datasets: [{
                label: 'Pedidos por motoboy',
                backgroundColor: corPri,
                borderColor: corPri,
                data: pedidosMotoboys
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

const chartDia = () => {
    let dias = [];
    let pedidosDias = [];
    filtrados.forEach((p) => {
        if (dias.indexOf(p.dataPedido.toString().slice(0, 10)) == -1) {
            dias.push(p.dataPedido.toString().slice(0, 10));
        }
    });
    dias.forEach((p) => {
        let contador = 0;
        pedidos.forEach((p2) => {
            if (p2.dataPedido.toString().slice(0, 10) == p) {
                contador++;
            }
        });
        pedidosDias.push(contador);
    });
    let ctx = document.getElementById('chartDia').getContext('2d');
    let chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: dias,
            datasets: [{
                label: 'Pedidos por dia',
                backgroundColor: corTer,
                borderColor: corPri,
                data: pedidosDias
            }]
        },
        options: {
            responsive: true,
        }
    });
}
//Filtros
const inputDatas = () => {
    const data1 = document.querySelector("#data1");
    const data2 = document.querySelector("#data2");
    let dias = [];
    pedidos.forEach((p) => {
        if (dias.indexOf(p.dataPedido.toString().slice(0, 10)) == -1) {
            dias.push(p.dataPedido.toString().slice(0, 10));
        }
    });
    dias.forEach((p) => {
        let option = document.createElement("option");
        option.value = p;
        option.innerHTML = p;
        data1.appendChild(option);
    });
    let ultimo = dias.length - 1;
    dias.forEach((p, i) => {
        let option = document.createElement("option");
        option.value = p;
        if (i == ultimo) {
            option.selected = true;
        }
        option.innerHTML = p;
        data2.appendChild(option);
    });
}

const filtrar = async () => {
    const filtro1 = await filtrarDatas(pedidos);
    const filtro2 = await filtrarEntregas(filtro1);
    filtrados = [];
    filtro2.forEach((p) => {
        filtrados.push(p);
    });
    const corpo = document.querySelector("#tcorpo");
    corpo.innerHTML = "";
    carregar();
}

const filtrarEntregas = (dados) => {
    const tipo = document.querySelector("#tipo").value;
    let tipos = []
    dados.forEach((p) => {
        if (tipo == 2) {
            if (p.motoboyId == 1) {
                tipos.push(p);
            }
        } else if (tipo == 3) {
            if (p.motoboyId != 1) {
                tipos.push(p);
            }
        } else {
            tipos.push(p);
        }
    });
    return tipos;
}

const filtrarDatas = (dados) => {
    const data1 = document.querySelector("#data1").value;
    const data2 = document.querySelector("#data2").value;
    let datas = [];
    dados.forEach((p) => {
        if (data1 < data2) {
            if (p.dataPedido.toString().slice(0, 10) >= data1 && p.dataPedido.toString().slice(0, 10) <= data2) {
                datas.push(p);
            }
        } else {
            if (p.dataPedido.toString().slice(0, 10) >= data2 && p.dataPedido.toString().slice(0, 10) <= data1) {
                datas.push(p);
            }
        }
    });
    return datas;
}

//Cards
const addCard = (titulo, texto) => {
    const cards = document.querySelector("#cards");
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
        <div class="card-header">
            ${titulo}
        </div>
        <div class="card-body">
            <p class="card-text">${texto}</p>
        </div>
    `;
    cards.appendChild(card);
}

const estatisticas = () => {
    let tempoMedioEntrega = 0;
    let contadorEntregas = 0;
    let tempoMedioCozinha = 0;
    let contadorCozinha = 0;
    let valorTotal = 0;
    let valorTotalEntrega = 0;
    let freteTotal = 0;
    filtrados.forEach((p, i) => {
        if (p.motoboyId != 1) {
            tempoMedioEntrega += diferencaMinutos(new Date(p.dataEntrega), new Date(p.dataCozinha));
            contadorEntregas++;
            freteTotal += p.valorEntrega;
            valorTotalEntrega += p.valorPedido;
        }
        tempoMedioCozinha += diferencaMinutos(new Date(p.dataCozinha), new Date(p.dataPedido));
        contadorCozinha++;
        valorTotal += p.valorPedido;
    });
    tempoMedioEntrega /= contadorEntregas;
    tempoMedioCozinha /= contadorCozinha;
    addCard("Pedidos", "Tempo médio de entregas: " + tempoMedioEntrega.toFixed(2) + " minutos");
    addCard("Pedidos", "Total de entregas: " + contadorEntregas);
    addCard("Pedidos", "Tempo médio de cozinha: " + tempoMedioCozinha.toFixed(2) + " minutos");
    addCard("Pedidos", "Total de pedidos: " + contadorCozinha);
    addCard("Pedidos", "Valor total de pedidos: " + valorTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }));
    addCard("Pedidos", "Valor total de entregas: " + valorTotalEntrega.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }));
    addCard("Pedidos", "Valor total de frete: " + freteTotal.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }));
}