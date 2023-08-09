import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const PlanSchema = Schema({
    start: {
        type: Date,
        required:true
    },
    end: {
        type: Date,
        required:true
    },
    city: {
        type: String,
        required:true
    },
    itinerary: {
        type: String,
        required:true
    }
}, {timestamps: true});

export const Plan = mongoose.model('Plan', PlanSchema);