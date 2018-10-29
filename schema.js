const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const portfolioSchema = new Schema({
    name: String,
    ticker: String,
    stockRank: Number,
    type: String,
    price: Number,
    shares: Number,
    purchaseDate: { type: Date, default: Date.now },
    competitorStocks: [{String, Number}]
    
});