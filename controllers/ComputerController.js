import Computer from "../models/ComputerModel.js";
import User from "../models/UserModel.js";

export const defaultRoute = async(req, res) => {
    return res.status(404).json({
        message: "HELLO AKU ATING :) !!"
    })
}

export const getAllComputer = async(req, res) => {
    try {
        const data = await Computer.findAll({include: User})
        res.status(200).json({
            status: 'Success',
            data: data
        })
    }catch(err) {
        res.status(500).json({
            status: 'Error',
            message: err
        })
    }
} 

export const getOneComputer = async(req, res) => {
    try {
        const data = await Computer.findOne({where: { id: req.params.id }, include: User})

        if(!data){
            res.status(404).json({
                status: 'Error',
                message: 'Data not found!'
            })
        }

        res.status(200).json({
            status: 'Success',
            data: data
        })
    }catch(err) {
        res.status(500).json({
            status: 'Error',
            message: err
        })
    }
}

export const createComputer = async(req, res) => {
    try {
        const payload = {
            name: req.body.name,
            user_id: req.body.user_id
        }

        const data = await Computer.create(payload)

        res.status(201).json({
            status: 'Success',
            message: 'Data created!',
            data: data
        })
    } catch(err) {
        res.status(500).json({
            status: 'Error',
            message: err
        })
    }
}

export const updateComputer = async(req, res) => {
    const data = await Computer.findOne({
        where: {
            id: req.params.id
        }
    })

    if(!data){
        res.status(404).json({
            status: 'Error',
            message: 'Data not found!'
        })
    }

    try {
        const payload = {
            name: req.body.name
        }

        await Computer.update(payload, {where: { id: req.params.id }})
        const data = await Computer.findOne({
            where: {
                id: req.params.id
            }
        })
        res.status(200).json({
            status: 'Success',
            message: 'Data Updated!',
            data: data
        })
    } catch(err) {
        res.status(500).json({
            status: 'Error',
            message: err
        })
    }
}

export const deleteComputer = async(req, res) => {
    const notFoundComputer = await Computer.findOne({
        where: {
            id: req.params.id
        }
    })

    if(!notFoundComputer){
        res.status(404).json({
            status: 'Error',
            message: 'Data not found!'
        })
    }

    try {
        const data = await Computer.destroy({
            where: {
                id: req.params.id
            }
        })
        res.status(200).json({
            status: 'Success',
            message: 'Data Deleted!'
        })
    } catch(err) {
        res.status(500).json({
            status: 'Error',
            message: err
        })
    }
}