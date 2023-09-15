import mongoose from 'mongoose';

const Connection  =()=>{

    const DB_URI= `mongodb://amanchauhancl1:fcuv1T4nUj0K6nXO@ac-rdkxiyx-shard-00-00.kccaf5i.mongodb.net:27017,ac-rdkxiyx-shard-00-01.kccaf5i.mongodb.net:27017,ac-rdkxiyx-shard-00-02.kccaf5i.mongodb.net:27017/?ssl=true&replicaSet=atlas-rd1xkr-shard-0&authSource=admin&retryWrites=true&w=majority`;
   try {
        mongoose.connect(DB_URI, {useNewUrlParser:true});
        console.log('datbase connected successfully');
   }
   catch(error){
    console.log('error while connecting ',error.message)
   }
}

export default Connection ;