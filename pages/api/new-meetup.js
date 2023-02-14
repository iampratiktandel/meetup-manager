import { MongoClient } from "mongodb";

async function handler(req, res) {
    const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.ydkhodg.mongodb.net/?retryWrites=true&w=majority`;
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    if (req.method === 'POST') {
        const data = req.body;
        const meetupsCollection = client.db("Meetup_Manager").collection("meetups");

        const result = await meetupsCollection.insertOne(data);
        console.log(result);

        client.close();
        res.status(201).json({ message: 'Meetup inserted successfully' });
    }
}

export default handler;