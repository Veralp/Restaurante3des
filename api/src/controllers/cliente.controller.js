const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const create = async (req, res) => {
    try {
        const data = req.body;
        const cliente = await prisma.cliente.create({
            data: data
        });
        return res.status(201).json(cliente).end();
    } catch (error) {
        res.status(400).json({ error: error.message }).end();
    }
}

const read = async (req, res) => {
    if (req.params.id) {
        const id = parseInt(req.params.id);
        const cliente = await prisma.cliente.findUnique({
            where: {
                id: id
            }
        });
        return res.json(cliente);
    } else {
        const cliente = await prisma.cliente.findMany();
        return res.json(cliente);
    }
}

module.exports = {
    read,
    create
};