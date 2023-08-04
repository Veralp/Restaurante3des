const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const create = async (req, res) => {
    const data = req.body;
    const motoboy = await prisma.motoboy.create({
        data: data
    });
    return res.status(201).json(motoboy).end();
}

const read = async (req, res) => {
    const motoboys = await prisma.motoboy.findMany();
    return res.json(motoboys);
}

const update = async (req, res) => {
    try {
        const data = req.body;
        let motoboy = await prisma.motoboy.update({
            data: data,
            where: {
                id: parseInt(req.body.id)
            }
        });
        res.status(202).json(motoboy).end();
    } catch (error) {
        res.status(404).json({ error: error.message }).end();
    }
}

const del = async (req, res) => {
    try {
        let motoboy = await prisma.motoboy.delete({
            where: {
                id: parseInt(req.params.id)
            }
        });
        res.status(204).json(motoboy).end();
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