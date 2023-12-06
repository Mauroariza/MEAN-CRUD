import express from 'express';
const router = express.Router()

import Employee from '../models/employee.model.js';
import { generateCrudMethods } from '../services/employee.service.js';
const employeeCrud = generateCrudMethods(Employee)
import middlewares from '../middlewares/index.js';
const { validateDbId, raiseRecord404Error } = middlewares;


router.get('/', (req, res, next) => {
    employeeCrud.getAll()
        .then(data => res.send(data))
        .catch(err => next(err))
})

router.get('/:id', validateDbId, (req, res, next) => {
    employeeCrud.getById(req.params.id)
        .then(data => {
            if (data) res.send(data)
            else raiseRecord404Error(req, res)
        })
        .catch(err => next(err))
})

router.post('/', (req, res, next) => {
    const newRecord = {
        fullName: req.body.fullName,
        position: req.body.position,
        location: req.body.location,
        salary: req.body.salary,
    }
    employeeCrud.create(newRecord)
        .then(data => res.status(201).json(data))
        .catch(err => next(err))
})

router.put('/:id', validateDbId, (req, res) => {
    const udpatedRecord = {
        fullName: req.body.fullName,
        position: req.body.position,
        location: req.body.location,
        salary: req.body.salary,
    }
    employeeCrud.update(req.params.id, udpatedRecord)
        .then(data => {
            if (data) res.send(data)
            else raiseRecord404Error(req, res)
        })
        .catch(err => next(err))
})

router.delete('/:id', validateDbId, (req, res) => {
    employeeCrud.delete(req.params.id)
        .then(data => {
            if (data) res.send(data)
            else raiseRecord404Error(req, res)
        })
        .catch(err => next(err))
})


export default router;