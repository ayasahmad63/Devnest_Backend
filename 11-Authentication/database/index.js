const { Sequelize } = require(sequelize);



const sequelize = new Sequelize(
    "postges",
    "ayasahmad63",
    "12345678",
    {
        host: "localhost",
        dialect: "postgres"
    }


);

sequelize.sync();

(async () => {
    try {
        await sequelize.authenticate();
        console.log("Connection established with DB");
    }
    catch (err) {
        console.log("Unable to connect to DB");
    }
})();




module.exports = sequelize;















