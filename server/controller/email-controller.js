import Email from "../model/email.js"
export const saveSentEmail=(req,res)=>{
  try{
   const email= new Email(req.body);
   email.save();
   res.status(200).json("email saved sucessfully..")
  }catch(error){
   res.status(500).json(error.message)
  }
}