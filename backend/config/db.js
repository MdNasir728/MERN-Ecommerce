const mongoose = require("mongoose")


async function connectDB(){
    try{
        const res = await mongoose.connect(process.env.MONGODB_URI)
        if (res) {
            console.log("connnected to DB")

        }
    }catch(err){
        console.log(err)
        console.log("Connnection to DB failed")

    }
}

module.exports = connectDB