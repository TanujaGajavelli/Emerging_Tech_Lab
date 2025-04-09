const mongoose=require('mongoose')

async function dbConnect(){
    try{
        const DB_URL=process.env.DB_URL
        const DB_Name=process.env.DB_NAME
        await mongoose.connect(`${DB_URL}/${DB_Name}`)
        console.log("Database Connected");
        
    }
    catch(error){
        throw error
    }
}
export default dbConnect