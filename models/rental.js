const mongoose = require('mongoose');
const Joi = require('joi');
const moment = require('moment');

const rentalSchema = new mongoose.Schema({
    movie: {
        type: new mongoose.Schema ({
            title: {
                type: String,
                required: true, 
                minlength: 5, 
                maxlength: 255
            },
            dailyRentalRate: {
                type: Number,
                required: true,
                min: 0,
                max: 255,
            },
        dateOut: {
            type: Date, 
            required: true,
            default: Date.now
        },
        dateReturned: {
            type: Date
        },
        rentalFee: {
            type: Number,
            min: 0
        }
    }),
},
    customer: {
        type: new mongoose.Schema ({
            name: {
                type: String, 
                required: true,
                minlength: 5,
                maxlength: 50
            },
            isGold: {
                type: Boolean,
                required: true,
                default: false
            },
            phone: {
                type: String,
                required: true,
                minlength: 5,
                maxlength: 50
            },
       })
    }
}); 

rentalSchema.statics.lookup = function(customerId, movieId) {
    return this.findOne({
        'customerId': customerId,
        'movie._id': movieId,
    });

}

rentalSchema.methods.return = function() {
    this.dateReturned = new Date();

    const rentalDays = moment().diff(this.dateOut, 'days'); 
    this.rentalFee = rentalDays * this.movie.dailyRentalRate;
}

const Rental = mongoose.model('Rental', rentalSchema);


function validateRental(rental) {
    const schema = {
        movieId: Joi.objectId().required(),
        customerId: Joi.objectId().required(),
    };

    return Joi.validate(rental, schema);
}

exports.Rental = Rental;
exports.validateRental = validateRental;