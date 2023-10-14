import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express'
import initApp from './Src/Modules/app.router.js';

const app = express();
const PORT = process.env.PORT||3005;
initApp(app,express);
app.listen(PORT,(req,res)=>{

  
  console.log(`server is running at port${PORT}`)


});