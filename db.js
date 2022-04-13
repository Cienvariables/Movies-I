//Requerimos dotenv para acceder a las variables de entorno
const dotenv = require("dotenv");
dotenv.config();
//Requerimos mongoose para comunicarnos con la bd
const mongoose = require("mongoose");
//guardamos la url de Mongo en una variable
const mongoDb = process.env.MONGO_DB;
//Configuramos la función connect
const connect = async () => {
  try {
    const db = await mongoose.connect(mongoDb, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const { name, host } = db.connection;
    console.log(`Connected with db: ${name}, in host: ${host}`);
  } catch (error) {
    console.log("Error to connect with BD", error);
  }
};
//exportamos la funcion connect
module.exports = { connect };
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});
const cors = require("cors");
app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:4200'],
  credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
