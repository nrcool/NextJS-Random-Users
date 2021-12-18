import client  from "./mongoConnection"
export default async function handler(req,res){
    await client.connect()
    const db = client.db("users-db")
    const collection = db.collection("users")
    /* const users=await collection.findOne({page:1}) */
    const users=await collection.find().toArray()
    res.send({users})
    client.close()
}