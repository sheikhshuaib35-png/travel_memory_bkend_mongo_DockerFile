const tripModel = require('../models/trip.model')
const mongoose = require('../conn').mongoose

async function tripAdditionController(req, res){
    console.log(req.body)
    try{
        let tripDetail = tripModel.Trip({
            tripName: req.body.tripName,
            startDateOfJourney: req.body.startDateOfJourney,
            endDateOfJourney: req.body.endDateOfJourney,
            nameOfHotels: req.body.nameOfHotels,
            placesVisited: req.body.placesVisited,
            totalCost: req.body.totalCost,
            tripType: req.body.tripType,
            experience: req.body.experience,
            image: req.body.image,
            shortDescription: req.body.shortDescription,
            featured: req.body.featured
        })
        await tripDetail.save()
        res.send('Trip added Successfully')
    }catch(error){
        console.error('ERROR', error)
        res.status(500).send('SOMETHING WENT WRONG')
    }
}

async function getMovieCollectionController(req, res) {
    try {
        const uri = process.env.MONGO_URI
        const sampleConn = await mongoose.createConnection(uri, {
            dbName: 'sample_mflix',
            useNewUrlParser: true,
            useUnifiedTopology: true
        }).asPromise()

        const movies = await sampleConn.db.collection('movies')
            .find({})
            .limit(50)
            .toArray()

        await sampleConn.close()
        res.json(movies)
    } catch (error) {
        console.error('MOVIES FETCH ERROR:', error)
        res.status(500).send('Failed to fetch movies from sample_mflix.movies')
    }
}

async function getTripDetailsController(req,res){
    try{
        tripModel.Trip.find({})
        .then(doc => res.send(doc))
        .catch(err => res.send('SOMETHING WENT WRONG WHILE FETCHING'))
    }catch(error){
        console.log('ERROR')
        res.send('SOMETHING WENT WRONG')
    }
}

async function getTripDetailsByIdController(req,res){
    try{
        tripModel.Trip.findById(req.params.id)
        .then(doc => res.send(doc))
        .catch(err => res.send('Nothing in database'))
    }catch(error){
        console.log('ERROR')
        res.send('SOMETHING WENT WRONG')
    }
}
module.exports = {
    tripAdditionController,
    getTripDetailsController,
    getTripDetailsByIdController,
    getMovieCollectionController
}