import client  from "../mongoConnection"

export default async function handler(req,res){ 
    console.log(req.query)
    await client.connect()
    const db = client.db("users-db")
    const collection = db.collection("users")
    /* const users=await collection.findOne({page:1}) */
    const result=await collection.findOne({page:Number(req.query.id)})
    res.send({result})
    client.close()
}
