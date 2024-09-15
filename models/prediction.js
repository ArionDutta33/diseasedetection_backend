const mongoose = require('mongoose');
const predictionSchema=new mongoose.Schema({
    file:{type:String,required:true},
    prediction:{type:String,lowercase:true,required:true},
},{timestamps:true});
//export this
module.exports=mongoose.model('prediction',predictionSchema);