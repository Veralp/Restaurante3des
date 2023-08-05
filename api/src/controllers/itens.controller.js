const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const create = async (req, res) => {
    try {
        const data = req.body;
        const itens = await prisma.itens.create({
            data: data
        });
        return res.status(201).json(itens).end();
    } catch (error) {
        res.status(404).json({ error: error.message }).end();
    }
}

const read = async (req, res) => {
    if (req.params.id) {
        const id = parseInt(req.params.id);
        const itens = await prisma.itens.findUnique({
            where: {
                id: id
            }
        });
        return res.json(itens);
    } else {
        const itens = await prisma.itens.findMany();
        return res.json(itens);
    }
}

const update = async (req, res) => {
    try {
        const data = req.body;
        let itens = await prisma.itens.update({
            data: data,
            where: {
                id: parseInt(req.body.id)
            }
        });
        res.status(202).json(itens).end();
    } catch (error) {
        res.status(404).json({ error: error.message }).end();
    }
}

const del = async (req, res) => {
    try {
        let itens = await prisma.itens.delete({
            where: {
                id: parseInt(req.params.id)
            }
        });
        res.status(204).json(itens).end();
    } catch (error) {
        res.status(404).json({ error: error.message }).end();
    }
}

module.exports = {
    read,
    create,
    update,
    del
};