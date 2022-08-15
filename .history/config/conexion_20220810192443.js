const URI = 'mongodb://user_web:KinswomanFloristUpstageTaekwondoEngraverOveractDemeanorStraddleFlop@sistemaagil.net:27018/web';
const mongoose = require('mongoose');

const dbConnection = async () => {

    try {
        await mongoose.connect(URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            authSource:"admin"
        });
    } catch (error) {
        throw new Error(error);
    }


}

module.exports = {
    dbConnection
}