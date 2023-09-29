import Departement from "../models/DepartementModel.js";
import User from "../models/UserModel.js";


export const getAllUser = async(req, res) => {
  try {
    const data = await User.findAll({ include: Departement })
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

export const getOneUser = async(req, res) => {
  try {
    const data = await User.findOne({where: { id: req.params.id }, include: Departement })

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
  } catch(err) {
    res.status(500).json({
        status: 'Error',
        message: err
    })
  }
}

export const createUser = async(req, res) => {
  try {
    const payload = {
      name: req.body.name,
      nik: req.body.nik
    }

    const data = await User.create(payload)
    
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

export const updateUser = async(req, res) => {
  const data = await User.findOne({
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
      name: req.body.name,
      nik: req.body.nik
    }

    await User.update(payload, {where: { id: req.params.id }})
    const data = await User.findOne({
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

export const deleteUser = async(req, res) => {
  const notFoundUser = await User.findOne({
    where: {
        id: req.params.id
    }
  })

  if(!notFoundUser){
    res.status(404).json({
        status: 'Error',
        message: 'Data not found!'
    })
  }

  try {
    const data = await User.destroy({
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