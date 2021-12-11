import mongoose from 'mongoose'

mongoose.connect('mongodb://localhost/data', {
})
.then(db => console.log('Database is running on server!..'))
.catch(error => console.log('error connecting database'))