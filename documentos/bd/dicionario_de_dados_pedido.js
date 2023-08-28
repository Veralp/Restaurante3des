	{
		"id": int,
		"clienteId": int,
		"motoboyId": int,
		"dataPedido": DateTime,
		"dataCozinha": DateTime?,
		"dataEntrega": DateTime?,
		"valorPedido": float,
		"valorEntrega": float,
		"itens": [
			{
				"quantidade": int,
				"cardapio": {
					"id": int,
					"produto": String,
					"descricao": String,
					"preco": float
				}
			}
		],
		"cliente": {
			"id": int,
			"cpf": String,
			"nome": String,
			"telefones": String,
			"enderecoCep": String,
			"enderecoNumero": String,
			"enderecoComplemento": String?
		}
	},