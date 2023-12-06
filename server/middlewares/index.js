import { Types } from 'mongoose';
const { ObjectId } = Types;

const validateDbId = (req, res, next) => {
    if (ObjectId.isValid(req.params.id) == false)
        res.status(400).json({
            error: `given object id (${req.params.id}) is not valid.`
        })
    else
        next()
}

const raiseRecord404Error = (req, res) => {
    res.status(404).json({
        error: 'no record with given _id : ' + req.params.id
    })
}

export const errorHandler = (err, req, res, next) => {
    console.error(err);
    res.status(500).send('Something went wrong');
  };

export default {
    validateDbId,
    raiseRecord404Error,
    errorHandler
}