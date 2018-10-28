const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const portfolioSchema = new Schema({
    ticker: String,
    stockRank: Number,
    breed: String,
    price: Number,
    shares: Number,
    purchaseDate: { type: Date, default: Date.now },
    competitorStocks: [{String, Number}]
});