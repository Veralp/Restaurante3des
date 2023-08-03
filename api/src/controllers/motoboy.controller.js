const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const read = async (req, res) => {
    const motoboys = await prisma.motoboy.findMany();
    return res.json(motoboys);
}

module.exports = { read };