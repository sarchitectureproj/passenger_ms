import { Router } from 'express'
import { connect } from '../database'
import { ObjectID } from 'mongodb'

const router = Router();
const collection = 'passengers'

router.get('/', async (req, res) => {
    const db = req.app.locals.database;
    try {
        const result = await db.collection(collection).find({}).toArray();
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.toString() });
    }
});

router.post('/', async (req, res) => {
    const db = req.app.locals.database;
    try {
        const passenger = {
		first_name : req.body.first_name,
		last_name : req.body.last_name,
		age : req.body.age,
		gender : req.body.gender,
		email : req.body.email,
		phone_number : req.body.phone_number,
		birthdate : req.body.birthdate,
		occupation : req.body.occupation,
		nationality : req.body.nationality,
		native_language : req.body.native_language	
	};
        const result = await db.collection(collection).insertOne(passenger);
        res.json(result.ops[0]);
    } catch (error) {
        res.status(500).json({ error: error.toString() });
    }
});

router.put('/:id', async (req, res) => {
    const db = req.app.locals.database;
    const { id } = req.params
    const passenger = {
		first_name : req.body.first_name,
		last_name : req.body.last_name,
		age : req.body.age,
		gender : req.body.gender,
		email : req.body.email,
		phone_number : req.body.phone_number,
		birthdate : req.body.birthdate,
		occupation : req.body.occupation,
		nationality : req.body.nationality,
		native_language : req.body.native_language	
	};
    try {
        const result = await db.collection(collection).updateOne({ _id: ObjectID(id) }, { $set: passenger });
        res.json('Passenger updated succesfully');
    } catch (error) {
        res.status(500).json({ error: error.toString() });
    }
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const db = req.app.locals.database;
        const result = await db.collection(collection).findOne({ _id: ObjectID(id) });
        res.json(result)
    } catch (error) {
        res.status(500).json({ error: error.toString() });
    }

});

router.delete('/:id', async (req, res) => {
    const { id } = await req.params;
    const db = req.app.locals.database;
    try {
        const result = await db.collection(collection).remove({ _id: ObjectID(id) })
        res.json('Passenger deleted succesfully');
    } catch (error) {
        res.status(500).json({ error: error.toString() });
    }
});


export default router;