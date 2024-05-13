const QuestionModel = require("../model/questionSchema.js");

const question = async( req,res)=>{
    try{
        const data = await QuestionModel.find();
        // console.log(data,'asdfghjkl');
        return res.status(200).json({
            success:true,
            data:data
        })
    }catch(error){
        res.status(400).json({
            success:false,
            message:error.message
        })
    }
}

module.exports = {question};