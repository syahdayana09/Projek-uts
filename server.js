const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Import Routes
const userRoutes = require('./routes/userRoutes');
const buyerRoutes = require('./routes/buyerRoutes');
const voucherRoutes = require('./routes/voucherRoutes');
const productRoutes = require('./routes/productRoutes');
const orderRoutes = require('./routes/orderRoutes');
const detailOrderRoutes = require('./routes/detailOrderRoutes');
const ratingRoutes = require('./routes/ratingRoutes');

// Register Routes
app.use('/users', userRoutes);
app.use('/buyers', buyerRoutes);
app.use('/vouchers', voucherRoutes);
app.use('/products', productRoutes);
app.use('/orders', orderRoutes);
app.use('/detail-orders', detailOrderRoutes);
app.use('/ratings', ratingRoutes);

app.get('/', (req, res) => {
  res.send('🚀 UTS Prisma API is running...');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
