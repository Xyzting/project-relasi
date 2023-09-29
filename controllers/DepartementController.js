import Departement from "../models/DepartementModel.js";
import Project from "../models/ProjectModel.js";
import User from "../models/UserModel.js";

export const getAllDepartement = async(req, res) => {
  try {
    const data = await Departement.findAll({include: Project})
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

export const getOneDepartement = async(req, res) => {
  try {
    const data = await Departement.findOne({where: { id: req.params.id }, include: Project })

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

export const createDepartement = async(req, res) => {
  try {
    const payload = {
      title: req.body.title,
      description: req.body.description
    }

    const data = await Departement.create(payload)

    const user = await User.findOne({where: { id: 1 }})
    await data.addUser(user)

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

export const updateDepartement = async(req, res) => {
  const data = await Departement.findOne({
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
      title: req.body.title,
      description: req.body.description
    }

    await Departement.update(payload, {where: { id: req.params.id }})
    const data = await Departement.findOne({
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

export const deleteDepartement = async(req, res) => {
  const notFoundDepartement = await Departement.findOne({
    where: {
        id: req.params.id
    }
  })

  if(!notFoundDepartement){
    res.status(404).json({
        status: 'Error',
        message: 'Data not found!'
    })
  }

  try {
    const data = await Departement.destroy({
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