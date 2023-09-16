import mongoose from 'mongoose';

const Connection =()=>{

    const DB_URI= `mongodb://user:siL04z6dOY54lXce@ac-5vwrar9-shard-00-00.d3zzzni.mongodb.net:27017,ac-5vwrar9-shard-00-01.d3zzzni.mongodb.net:27017,ac-5vwrar9-shard-00-02.d3zzzni.mongodb.net:27017/?ssl=true&replicaSet=atlas-1lc1wm-shard-0&authSource=admin&retryWrites=true&w=majority`
    try { 
        mongoose.connect(DB_URI, {useNewUrlParser:true});
        console.log('datbase connected successfully');
   }
   catch(error){
    console.log('error while connecting ',error.message)
   }
}

export default Connection ;