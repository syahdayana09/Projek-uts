const prisma = require('../prismaClient');
module.exports = require('./_templateController')('products', prisma);
