import {MongoClient} from "mongodb"

const url = "mongodb+srv://nrcool:test123@cluster0.yxxrz.mongodb.net/users-db?retryWrites=true&w=majority"
const client = new MongoClient(url)

export default client