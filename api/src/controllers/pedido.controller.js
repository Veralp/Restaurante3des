const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const create = async (req, res) => {
    try {
        const data = req.body;
        const pedido = await prisma.pedido.create({
            data: data
        });
        return res.status(201).json(pedido).end();
    } catch (error) {
        res.status(400).json({ error: error.message }).end();
    }
}

const read = async (req, res) => {
    if (req.params.id) {
        const id = parseInt(req.params.id);
        const pedido = await prisma.pedido.findUnique({
            where: {
                id: id
            }
        });
        return res.json(pedido);
    } else {
        const pedido = await prisma.pedido.findMany();
        return res.json(pedido);
    }
}

const readCozinha = async (req, res) => {
    const pedido = await prisma.pedido.findMany({
        where: {
            "dataCozinha": null,
            "dataEntrega": null
        }
    });
    return res.json(pedido);

}

const readEntrega = async (req, res) => {
    const pedido = await prisma.pedido.findMany({
        where: {
            "dataCozinha": { not: null },
            "dataEntrega": null
        }
    });
    return res.json(pedido);
}

const readHoje = async (req, res) => {
    const hoje = new Date().toISOString().slice(0, 10);
    const pedido = await prisma.pedido.findMany({
        where: {
            //SELECT * FROM Pedido WHERE dataPedido LIKE CONCAT(CURDATE(),"%")
            dataPedido: {
                startsWith: hoje
            }
        }
    });
    return res.json(pedido).end();
}

const update = async (req, res) => {
    try {
        const data = req.body;
        let pedido = await prisma.pedido.update({
            data: data,
            where: {
                id: parseInt(req.body.id)
            }
        });
        res.status(202).json(pedido).end();
    } catch (error) {
        res.status(404).json({ error: error.message }).end();
    }
}

const del = async (req, res) => {
    try {
        let pedido = await prisma.pedido.delete({
            where: {
                id: parseInt(req.params.id)
            }
        });
        res.status(204).json(pedido).end();
    } catch (error) {
        res.status(404).json({ error: error.message }).end();
    }
}

module.exports = {
    read,
    readCozinha,
    readEntrega,
    readHoje,
    create,
    update,
    del
}