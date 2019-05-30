import MongoClient from 'mongodb';

export async function connect() {
    try {
        const client = await MongoClient.connect('mongodb://passenger-db:27017', {useNewUrlParser: true});
        const db = client.db('Passengers')
        console.log('DB is connected')
        return db;
    } catch (error) {
        console.log(error)
    }
}