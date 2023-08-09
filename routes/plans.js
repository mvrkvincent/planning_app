import express from 'express';
import {Plan} from '../models/plan.js';

const router = express.Router();

router.get('/', (_, res) => {
    res.json('plans can get got');
})

// {data}
router.post('/', (req, res) => {
    debugger
    const newPlan = new Plan({
        start: req.body.start,
        end: req.body.end,
        city: req.body.city,
        itinerary: req.body.itinerary
    })
    
    newPlan.save().then(plan => res.json(plan))
        .catch(err => res.json(err));
});

export const plans = router;