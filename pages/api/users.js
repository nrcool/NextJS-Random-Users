import client from "./mongoConnection";
export default async function handler(req, res) {
  await client.connect();
  const db = client.db(process.env.NEXT_APP_DB_NAME);
  const collection = db.collection(process.env.NEXT_APP_COL_NAME);
  /* const users=await collection.findOne({page:1}) */
  const users = await collection.find().toArray();
  res.send({ users });
  client.close();
}
