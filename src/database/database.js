const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://db-products:27017/products',{    
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true 
});

module.exports = mongoose;