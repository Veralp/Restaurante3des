-- Popular o banco de dados com alguns dados de tetes
use restaurante;
insert into cliente values
(default, "000.000.000-00","Comer no local","19 99999-9999", "13917-151", "0", null),
(default, "443.785.553-10","Jaqueline Souza Martim","19-85916-8673, 19-70565-8763", "13917-152", "105", null),
(default, "789.588.411-50","Sara Bispo Filho","19-04431-8940", "13917-052", "1025", null),
(default, "731.715.974-38","Clóvis Martins Bispo","19-20609-9645", "13917-156", "1150", "Fundos"),
(default, "498.084.178-33","Gilberto Martins Teixeira","19-34251-1302", "13917-158", "1138", "Ap144 bl2"),
(default, "066.453.810-00","Saulo Martim","19-50210-7927, 19-54920-8113", "13914-552", "1227", null),
(default,"219.826.395-55","Ivo Souza","19-85456-8673","13919-410","413",null),
(default,"484.584.060-04","Tatiane Silva Souza","19-85456-8622","13919-411","47",null),
(default,"714.626.501-39","Umberto Oliveira Neto","19-85456-8111","13919-412","249","AP14 BL24"),
(default,"936.097.170-76","Gisele Matos","19-85456-1212","13919-413","231",null),
(default,"829.070.043-10","Douglas de Oliveira Oliveira","19-85456-6565","13919-414","444",null),
(default,"448.299.120-14","Timóteo Bispo","13919-415","19-85456-4473","77",null),
(default,"164.684.026-70","Hugo Bispo","19-85456-4547","13919-404","227",null),
(default,"485.230.922-18","Carla Bispo J�nior","19-85456-8173","13919-405","375",null),
(default,"390.046.454-54","Helena Matos","19-85555-8673","13919-406","421","AP14 BL26"),
(default,"868.308.397-77","Willian Oliveira Neto","19-99956-8673","13919-407","336",null),
(default,"629.872.318-81","Xeila Bispo","19-85225-8673","13919-408","210",null),
(default,"715.425.766-01","Flávia Alves","19-85116-8673","13919-409","30",null),
(default,"199.535.473-27","Paula Cust�dio Mattos","19-85456-8213","13919-410","886","fundos"),
(default,"247.129.753-69","Hugo Martins","19-85456-7783","13919-411","603",null),
(default,"502.923.709-70","Valéria Martins Custódio","19-11111-8673","13919-412","753",null),
(default,"174.437.799-50","Evandro Oliveira","19-85456-1173","13919-413","536","AP44 BL10"),
(default,"838.879.271-76","Antônio Cust�dio","19-85456-8253","13919-414","769",null),
(default,"636.671.293-00","Carla Silva","19-85456-8673","33919-415","663",null),
(default,"894.979.642-26","Luis Filho Teixeira","19-85445-8673","13919-412","400",null),
(default,"148.904.171-09","Eva Silva","19-85456-1173","13919-413","542",null),
(default,"500.698.790-10","Xailo Souza de Souza","19-85776-8673","13919-414","140",null),
(default,"599.764.172-41","Norberto Teixeira","19-85336-8673","13919-415","103",null),
(default,"282.794.051-51","Bruna Oliveira Neto","19-21456-8673","13919-404","93",null);

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
(default,1, 1, DATE_ADD(curtime(), INTERVAL -20350 minute), DATE_ADD(curtime(), INTERVAL -20285 minute), DATE_ADD(curtime(), INTERVAL -20285 minute), 0, 0),
(default,20, 4, DATE_ADD(curtime(), INTERVAL -19615 minute), DATE_ADD(curtime(), INTERVAL -19597 minute), DATE_ADD(curtime(), INTERVAL -19576 minute), 0, 5),
(default,9, 3, DATE_ADD(curtime(), INTERVAL -19109 minute), DATE_ADD(curtime(), INTERVAL -19083 minute), DATE_ADD(curtime(), INTERVAL -19057 minute), 0, 10),
(default,1, 1, DATE_ADD(curtime(), INTERVAL -18145 minute), DATE_ADD(curtime(), INTERVAL -18059 minute), DATE_ADD(curtime(), INTERVAL -18059 minute), 0, 0),
(default,1, 1, DATE_ADD(curtime(), INTERVAL -17673 minute), DATE_ADD(curtime(), INTERVAL -17624 minute), DATE_ADD(curtime(), INTERVAL -17624 minute), 0, 0),
(default,4, 2, DATE_ADD(curtime(), INTERVAL -16931 minute), DATE_ADD(curtime(), INTERVAL -16905 minute), DATE_ADD(curtime(), INTERVAL -16872 minute), 0, 7),
(default,10, 4, DATE_ADD(curtime(), INTERVAL -16077 minute), DATE_ADD(curtime(), INTERVAL -16058 minute), DATE_ADD(curtime(), INTERVAL -16018 minute), 0, 8),
(default,1, 1, DATE_ADD(curtime(), INTERVAL -15215 minute), DATE_ADD(curtime(), INTERVAL -15140 minute), DATE_ADD(curtime(), INTERVAL -15140 minute), 0, 0),
(default,1, 1, DATE_ADD(curtime(), INTERVAL -14482 minute), DATE_ADD(curtime(), INTERVAL -14460 minute), DATE_ADD(curtime(), INTERVAL -14460 minute), 0, 0),
(default,1, 1, DATE_ADD(curtime(), INTERVAL -14125 minute), DATE_ADD(curtime(), INTERVAL -14053 minute), DATE_ADD(curtime(), INTERVAL -14053 minute), 0, 0),
(default,1, 1, DATE_ADD(curtime(), INTERVAL -13516 minute), DATE_ADD(curtime(), INTERVAL -13501 minute), DATE_ADD(curtime(), INTERVAL -13501 minute), 0, 0),
(default,22, 3, DATE_ADD(curtime(), INTERVAL -13261 minute), DATE_ADD(curtime(), INTERVAL -13238 minute), DATE_ADD(curtime(), INTERVAL -13224 minute), 0, 4),
(default,1, 1, DATE_ADD(curtime(), INTERVAL -12844 minute), DATE_ADD(curtime(), INTERVAL -12798 minute), DATE_ADD(curtime(), INTERVAL -12798 minute), 0, 0),
(default,25, 3, DATE_ADD(curtime(), INTERVAL -12038 minute), DATE_ADD(curtime(), INTERVAL -12017 minute), DATE_ADD(curtime(), INTERVAL -12004 minute), 0, 6),
(default,1, 1, DATE_ADD(curtime(), INTERVAL -11639 minute), DATE_ADD(curtime(), INTERVAL -11583 minute), DATE_ADD(curtime(), INTERVAL -11583 minute), 0, 0),
(default,26, 2, DATE_ADD(curtime(), INTERVAL -11529 minute), DATE_ADD(curtime(), INTERVAL -11492 minute), DATE_ADD(curtime(), INTERVAL -11466 minute), 0, 7),
(default,16, 4, DATE_ADD(curtime(), INTERVAL -10827 minute), DATE_ADD(curtime(), INTERVAL -10793 minute), DATE_ADD(curtime(), INTERVAL -10759 minute), 0, 4),
(default,8, 3, DATE_ADD(curtime(), INTERVAL -10525 minute), DATE_ADD(curtime(), INTERVAL -10462 minute), DATE_ADD(curtime(), INTERVAL -10438 minute), 0, 6),
(default,1, 1, DATE_ADD(curtime(), INTERVAL -10084 minute), DATE_ADD(curtime(), INTERVAL -9994 minute), DATE_ADD(curtime(), INTERVAL -9994 minute), 0, 0),
(default,6, 4, DATE_ADD(curtime(), INTERVAL -9275 minute), DATE_ADD(curtime(), INTERVAL -9195 minute), DATE_ADD(curtime(), INTERVAL -9174 minute), 0, 9),
(default,7, 2, DATE_ADD(curtime(), INTERVAL -8544 minute), DATE_ADD(curtime(), INTERVAL -8509 minute), DATE_ADD(curtime(), INTERVAL -8471 minute), 0, 7),
(default,20, 3, DATE_ADD(curtime(), INTERVAL -7830 minute), DATE_ADD(curtime(), INTERVAL -7744 minute), DATE_ADD(curtime(), INTERVAL -7705 minute), 0, 4),
(default,26, 2, DATE_ADD(curtime(), INTERVAL -7730 minute), DATE_ADD(curtime(), INTERVAL -7717 minute), DATE_ADD(curtime(), INTERVAL -7704 minute), 0, 10),
(default,28, 3, DATE_ADD(curtime(), INTERVAL -6764 minute), DATE_ADD(curtime(), INTERVAL -6743 minute), DATE_ADD(curtime(), INTERVAL -6719 minute), 0, 10),
(default,21, 2, DATE_ADD(curtime(), INTERVAL -6714 minute), DATE_ADD(curtime(), INTERVAL -6690 minute), DATE_ADD(curtime(), INTERVAL -6668 minute), 0, 4),
(default,1, 1, DATE_ADD(curtime(), INTERVAL -6290 minute), DATE_ADD(curtime(), INTERVAL -6208 minute), DATE_ADD(curtime(), INTERVAL -6208 minute), 0, 0),
(default,27, 3, DATE_ADD(curtime(), INTERVAL -5567 minute), DATE_ADD(curtime(), INTERVAL -5554 minute), DATE_ADD(curtime(), INTERVAL -5534 minute), 0, 10),
(default,1, 1, DATE_ADD(curtime(), INTERVAL -4612 minute), DATE_ADD(curtime(), INTERVAL -4591 minute), DATE_ADD(curtime(), INTERVAL -4591 minute), 0, 0),
(default,15, 3, DATE_ADD(curtime(), INTERVAL -4280 minute), DATE_ADD(curtime(), INTERVAL -4230 minute), DATE_ADD(curtime(), INTERVAL -4211 minute), 0, 7),
(default,12, 3, DATE_ADD(curtime(), INTERVAL -3623 minute), DATE_ADD(curtime(), INTERVAL -3596 minute), DATE_ADD(curtime(), INTERVAL -3584 minute), 0, 9),
(default,11, 2, DATE_ADD(curtime(), INTERVAL -3533 minute), DATE_ADD(curtime(), INTERVAL -3484 minute), DATE_ADD(curtime(), INTERVAL -3467 minute), 0, 8),
(default,13, 4, DATE_ADD(curtime(), INTERVAL -2964 minute), DATE_ADD(curtime(), INTERVAL -2894 minute), DATE_ADD(curtime(), INTERVAL -2856 minute), 0, 5),
(default,11, 2, DATE_ADD(curtime(), INTERVAL -2369 minute), DATE_ADD(curtime(), INTERVAL -2313 minute), DATE_ADD(curtime(), INTERVAL -2291 minute), 0, 9),
(default,2, 2, DATE_ADD(curtime(), INTERVAL -2085 minute), DATE_ADD(curtime(), INTERVAL -2003 minute), DATE_ADD(curtime(), INTERVAL -1966 minute), 0, 10),
(default,8, 2, DATE_ADD(curtime(), INTERVAL -1871 minute), DATE_ADD(curtime(), INTERVAL -1834 minute), DATE_ADD(curtime(), INTERVAL -1808 minute), 0, 8),
(default,1, 1, DATE_ADD(curtime(), INTERVAL -1145 minute), DATE_ADD(curtime(), INTERVAL -1125 minute), DATE_ADD(curtime(), INTERVAL -1125 minute), 0, 0),
(default,2, 2, DATE_ADD(curtime(), INTERVAL -1136 minute), DATE_ADD(curtime(), INTERVAL -1120 minute), DATE_ADD(curtime(), INTERVAL -1068 minute), 0, 5),
(default,3, 2, DATE_ADD(curtime(), INTERVAL -1131 minute), DATE_ADD(curtime(), INTERVAL -1125 minute), DATE_ADD(curtime(), INTERVAL -1050 minute), 0, 6),
(default,4, 3, DATE_ADD(curtime(), INTERVAL -1128 minute), DATE_ADD(curtime(), INTERVAL -1100 minute), DATE_ADD(curtime(), INTERVAL -1080 minute), 0, 10),
(default,5, 3, DATE_ADD(curtime(), INTERVAL -1122 minute), DATE_ADD(curtime(), INTERVAL -1110 minute), DATE_ADD(curtime(), INTERVAL -1098 minute), 0, 8),
(default,1, 1, DATE_ADD(curtime(), INTERVAL -1120 minute), DATE_ADD(curtime(), INTERVAL -1108 minute), DATE_ADD(curtime(), INTERVAL -1108 minute), 0, 0),
(default,1, 1, DATE_ADD(curtime(), INTERVAL -1115 minute), DATE_ADD(curtime(), INTERVAL -1105 minute), DATE_ADD(curtime(), INTERVAL -1105 minute), 0, 0),
(default,1, 1, DATE_ADD(curtime(), INTERVAL -65 minute), DATE_ADD(curtime(), INTERVAL -30 minute), DATE_ADD(curtime(), INTERVAL -30 minute), 0, 0),
(default,2, 2, DATE_ADD(curtime(), INTERVAL -45 minute), DATE_ADD(curtime(), INTERVAL -20 minute), DATE_ADD(curtime(), INTERVAL -5 minute), 0, 5),
(default,3, 3, DATE_ADD(curtime(), INTERVAL -30 minute), DATE_ADD(curtime(), INTERVAL -15 minute), null, 0, 5),
(default,1, 1, curtime(), null, null, 0, 0),
(default,4, 2, curtime(), null, null, 0, 0),
(default,2, 3, curtime(), null, null, 0, 0);

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
(default,13, 3, 2, (select preco from cardapio where id = 3)),
(default,14, 1, 2, (select preco from cardapio where id = 1)),
(default,15, 6, 2, (select preco from cardapio where id = 6)),
(default,16, 11, 1, (select preco from cardapio where id = 11)),
(default,17, 7, 2, (select preco from cardapio where id = 7)),
(default,18, 3, 2, (select preco from cardapio where id = 3)),
(default,19, 8, 1, (select preco from cardapio where id = 8)),
(default,20, 5, 1, (select preco from cardapio where id = 5)),
(default,21, 3, 1, (select preco from cardapio where id = 3)),
(default,22, 11, 1, (select preco from cardapio where id = 11)),
(default,23, 10, 2, (select preco from cardapio where id = 10)),
(default,24, 4, 1, (select preco from cardapio where id = 4)),
(default,25, 10, 2, (select preco from cardapio where id = 10)),
(default,26, 6, 2, (select preco from cardapio where id = 6)),
(default,27, 11, 2, (select preco from cardapio where id = 11)),
(default,28, 9, 2, (select preco from cardapio where id = 9)),
(default,29, 11, 2, (select preco from cardapio where id = 11)),
(default,30, 10, 1, (select preco from cardapio where id = 10)),
(default,31, 4, 1, (select preco from cardapio where id = 4)),
(default,32, 7, 1, (select preco from cardapio where id = 7)),
(default,33, 3, 1, (select preco from cardapio where id = 3)),
(default,34, 5, 2, (select preco from cardapio where id = 5)),
(default,35, 3, 1, (select preco from cardapio where id = 3)),
(default,36, 1, 1, (select preco from cardapio where id = 1)),
(default,37, 8, 2, (select preco from cardapio where id = 8)),
(default,38, 11, 1, (select preco from cardapio where id = 11)),
(default,39, 5, 1, (select preco from cardapio where id = 5)),
(default,40, 11, 1, (select preco from cardapio where id = 11)),
(default,41, 5, 1, (select preco from cardapio where id = 5)),
(default,42, 6, 1, (select preco from cardapio where id = 6)),
(default,43, 4, 1, (select preco from cardapio where id = 4)),
(default,44, 2, 2, (select preco from cardapio where id = 6)),
(default,44, 6, 1, (select preco from cardapio where id = 6)),
(default,45, 3, 1, (select preco from cardapio where id = 3)),
(default,45, 8, 2, (select preco from cardapio where id = 3)),
(default,46, 4, 1, (select preco from cardapio where id = 4)),
(default,46, 1, 1, (select preco from cardapio where id = 4)),
(default,47, 2, 1, (select preco from cardapio where id = 2)),
(default,48, 2, 1, (select preco from cardapio where id = 2));

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
update pedido set valorPedido = (select sum(valor) from itens where pedidoId = 14) where id =  14;
update pedido set valorPedido = (select sum(valor) from itens where pedidoId = 15) where id =  15;
update pedido set valorPedido = (select sum(valor) from itens where pedidoId = 16) where id =  16;
update pedido set valorPedido = (select sum(valor) from itens where pedidoId = 17) where id =  17;
update pedido set valorPedido = (select sum(valor) from itens where pedidoId = 18) where id =  18;
update pedido set valorPedido = (select sum(valor) from itens where pedidoId = 19) where id =  19;
update pedido set valorPedido = (select sum(valor) from itens where pedidoId = 20) where id =  20;
update pedido set valorPedido = (select sum(valor) from itens where pedidoId = 21) where id =  21;
update pedido set valorPedido = (select sum(valor) from itens where pedidoId = 22) where id =  22;
update pedido set valorPedido = (select sum(valor) from itens where pedidoId = 23) where id =  23;
update pedido set valorPedido = (select sum(valor) from itens where pedidoId = 24) where id =  24;
update pedido set valorPedido = (select sum(valor) from itens where pedidoId = 25) where id =  25;
update pedido set valorPedido = (select sum(valor) from itens where pedidoId = 26) where id =  26;
update pedido set valorPedido = (select sum(valor) from itens where pedidoId = 27) where id =  27;
update pedido set valorPedido = (select sum(valor) from itens where pedidoId = 28) where id =  28;
update pedido set valorPedido = (select sum(valor) from itens where pedidoId = 29) where id =  29;
update pedido set valorPedido = (select sum(valor) from itens where pedidoId = 30) where id =  30;
update pedido set valorPedido = (select sum(valor) from itens where pedidoId = 31) where id =  31;
update pedido set valorPedido = (select sum(valor) from itens where pedidoId = 32) where id =  32;
update pedido set valorPedido = (select sum(valor) from itens where pedidoId = 33) where id =  33;
update pedido set valorPedido = (select sum(valor) from itens where pedidoId = 34) where id =  34;
update pedido set valorPedido = (select sum(valor) from itens where pedidoId = 35) where id =  35;
update pedido set valorPedido = (select sum(valor) from itens where pedidoId = 36) where id =  36;
update pedido set valorPedido = (select sum(valor) from itens where pedidoId = 37) where id =  37;
update pedido set valorPedido = (select sum(valor) from itens where pedidoId = 38) where id =  38;
update pedido set valorPedido = (select sum(valor) from itens where pedidoId = 39) where id =  39;
update pedido set valorPedido = (select sum(valor) from itens where pedidoId = 40) where id =  40;
update pedido set valorPedido = (select sum(valor) from itens where pedidoId = 41) where id =  41;
update pedido set valorPedido = (select sum(valor) from itens where pedidoId = 42) where id =  42;
update pedido set valorPedido = (select sum(valor) from itens where pedidoId = 43) where id =  43;
update pedido set valorPedido = (select sum(valor) from itens where pedidoId = 44) where id =  44;
update pedido set valorPedido = (select sum(valor) from itens where pedidoId = 45) where id =  45;
update pedido set valorPedido = (select sum(valor) from itens where pedidoId = 46) where id =  46;
update pedido set valorPedido = (select sum(valor) from itens where pedidoId = 47) where id =  47;
update pedido set valorPedido = (select sum(valor) from itens where pedidoId = 48) where id =  48;

