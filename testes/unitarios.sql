-- Popular o banco de dados com alguns dados de tetes
insert into cliente values
(default, "000.000.000-00", "Comer no local","19 99999-9999", "13917-151", "0", null),
(default, "443.785.553-10", "Jaqueline Souza Martim","19-85916-8673, 19-70565-8763", "13917-152", "105", null),
(default, "789.588.411-50", "Sara Bispo Filho","19-04431-8940", "13917-052", "1025", null),
(default, "731.715.974-38", "Clóvis Martins Bispo","19-20609-9645", "13917-156", "1150", "Fundos"),
(default, "498.084.178-33", "Gilberto Martins Teixeira","19-34251-1302", "13917-158", "1138", "Ap144 bl2"),
(default, "066.453.810-00", "Saulo Martim","19-50210-7927, 19-54920-8113", "13914-552", "1227", null);

insert into motoboy values
(default,"Sem entrega","AAA-0A00","Sem veículo"),
(default,"Gilberto Martins","JQT-7I87","CG Titan KS 150 Honda"),
(default,"Clóvis Martins","FZC-9X29","Faser 250 Yamaha"),
(default,"Saulo Martim","LHW-1J81","Ginerae");

insert into cardapio values
(default, "Parmegiana de Frango", "Filé de frango empanado, coberto com molho de tomate, presunto e queijo mussarela gratinado. Acompanha arroz branco e fritas.", 25.00),
(default, "Parmegiana de Carne", "Filé mignon empanado, coberto com molho de tomate, presunto e queijo mussarela gratinado. Acompanha arroz branco e fritas.", 30.00),
(default, "Contra Filé Argentino", "Contra filé grelhado, com molho de churrasco, farofa, Acompanha arroz branco e feijão.", 50.00),
(default, "Contra Filé Acebolado", "Contra filé grelhado, com molho de churrasco, farofa, Acompanha arroz branco e feijão.", 45.00),
(default, "Bisteca de porco", "Bisteca de porco grelhada, farofa, couve refogada, Acompanha arroz branco, feijão e torresmo.", 49.90),
(default, "Refrigerante de 2L", "Refrigerante de 2L", 15.00),
(default, "Refrigerante de 1L", "Refrigerante de 1L", 12.00),
(default, "Refrigerante de 600ml", "Refrigerante de 600ml", 8.00),
(default, "Refrigerante de 350ml", "Refrigerante de 350ml", 5.00),
(default, "Cerveja de 600ml", "Cerveja de 600ml", 8.00),
(default, "Cerveja de 350ml", "Cerveja de 350ml", 5.00);

insert into pedido values
(default, 1, 1, DATE_ADD(curtime(), INTERVAL -1145 minute), DATE_ADD(curtime(), INTERVAL -1125 minute), DATE_ADD(curtime(), INTERVAL -1125 minute), 0, 0),
(default, 2, 2, DATE_ADD(curtime(), INTERVAL -1136 minute), DATE_ADD(curtime(), INTERVAL -1120 minute), DATE_ADD(curtime(), INTERVAL -1068 minute), 0, 5),
(default, 3, 2, DATE_ADD(curtime(), INTERVAL -1131 minute), DATE_ADD(curtime(), INTERVAL -1125 minute), DATE_ADD(curtime(), INTERVAL -1050 minute), 0, 6),
(default, 4, 3, DATE_ADD(curtime(), INTERVAL -1128 minute), DATE_ADD(curtime(), INTERVAL -1100 minute), DATE_ADD(curtime(), INTERVAL -1080 minute), 0, 10),
(default, 5, 3, DATE_ADD(curtime(), INTERVAL -1122 minute), DATE_ADD(curtime(), INTERVAL -1110 minute), DATE_ADD(curtime(), INTERVAL -1098 minute), 0, 8),
(default, 1, 1, DATE_ADD(curtime(), INTERVAL -1120 minute), DATE_ADD(curtime(), INTERVAL -1108 minute), DATE_ADD(curtime(), INTERVAL -1108 minute), 0, 0),
(default, 1, 1, DATE_ADD(curtime(), INTERVAL -1115 minute), DATE_ADD(curtime(), INTERVAL -1105 minute), DATE_ADD(curtime(), INTERVAL -1105 minute), 0, 0),
(default, 1, 1, DATE_ADD(curtime(), INTERVAL -65 minute), DATE_ADD(curtime(), INTERVAL -30 minute), DATE_ADD(curtime(), INTERVAL -30 minute), 0, 0),
(default, 2, 2, DATE_ADD(curtime(), INTERVAL -45 minute), DATE_ADD(curtime(), INTERVAL -20 minute), DATE_ADD(curtime(), INTERVAL -5 minute), 0, 5),
(default, 3, 3, DATE_ADD(curtime(), INTERVAL -30 minute), DATE_ADD(curtime(), INTERVAL -15 minute), null, 0, 5),
(default, 1, 1, curtime(), null, null, 0, 0),
(default, 4, 2, curtime(), null, null, 0, 0),
(default, 2, 3, curtime(), null, null, 0, 0);

insert into itens values
(default,1, 3, 1, (select preco from cardapio where id = 3)),
(default,1, 8, 1, (select preco from cardapio where id = 8)),
(default,2, 1, 2, (select preco from cardapio where id = 1)),
(default,3, 4, 1, (select preco from cardapio where id = 4)),
(default,3, 6, 1, (select preco from cardapio where id = 6)),
(default,4, 3, 1, (select preco from cardapio where id = 3)),
(default,5, 8, 1, (select preco from cardapio where id = 8)),
(default,5, 1, 2, (select preco from cardapio where id = 1)),
(default,6, 4, 1, (select preco from cardapio where id = 4)),
(default,7, 6, 1, (select preco from cardapio where id = 6)),
(default,8, 3, 1, (select preco from cardapio where id = 3)),
(default,8, 8, 1, (select preco from cardapio where id = 8)),
(default,9, 1, 2, (select preco from cardapio where id = 1)),
(default,10, 4, 1, (select preco from cardapio where id = 4)),
(default,11, 1, 1, (select preco from cardapio where id = 1)),
(default,12, 2, 1, (select preco from cardapio where id = 2)),
(default,12, 9, 1, (select preco from cardapio where id = 9)),
(default,13, 3, 2, (select preco from cardapio where id = 3));


-- Cadastrar a horaCozinha e horaEntrega para finalizar o pedido
-- update pedido set dataCozinha = curtime(), dataEntrega = curtime() where id = 3;

-- Cadastrar os valores dos pedidos
update pedido set valorPedido = (select sum(valor) from itens where pedidoId = 1) where id = 1;
update pedido set valorPedido = (select sum(valor) from itens where pedidoId = 2) where id = 2;
update pedido set valorPedido = (select sum(valor) from itens where pedidoId = 3) where id = 3;
update pedido set valorPedido = (select sum(valor) from itens where pedidoId = 4) where id = 4;
update pedido set valorPedido = (select sum(valor) from itens where pedidoId = 5) where id = 5;
update pedido set valorPedido = (select sum(valor) from itens where pedidoId = 6) where id = 6;
update pedido set valorPedido = (select sum(valor) from itens where pedidoId = 7) where id = 7;
update pedido set valorPedido = (select sum(valor) from itens where pedidoId = 8) where id = 8;
update pedido set valorPedido = (select sum(valor) from itens where pedidoId = 9) where id = 9;
update pedido set valorPedido = (select sum(valor) from itens where pedidoId = 10) where id = 10;
update pedido set valorPedido = (select sum(valor) from itens where pedidoId = 11) where id = 11;
update pedido set valorPedido = (select sum(valor) from itens where pedidoId = 12) where id = 12;
update pedido set valorPedido = (select sum(valor) from itens where pedidoId = 13) where id = 13;

