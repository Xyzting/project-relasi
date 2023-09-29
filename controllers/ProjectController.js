import Departement from "../models/DepartementModel.js";
import Project from "../models/ProjectModel.js";

export const getAllProject = async(req, res) => {
  try {
    const data = await Project.findAll({ include: Departement })
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

export const getOneProject = async(req, res) => {
  try {
    const data = await Project.findOne({where: { id: req.params.id }, include: Departement})

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

export const createProject = async(req, res) => {
  try {
    const payload = {
      title: req.body.title,
      name: req.body.name,
      description: req.body.description
    }

    const data = await Project.create(payload)

    const departement = await Departement.findOne({where: { id: 1 }})
    await data.addDepartement(departement)

    res.status(201).json({
        status: 'Success',
        message: 'Data created!',
        data: { ...data.dataValues, departement_id: departement.id}
    })

  } catch(err) {
    res.status(500).json({
        status: 'Error',
        message: err
    })
  }
}

export const updateProject = async(req, res) => {
  const data = await Project.findOne({
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
      name: req.body.name,
      description: req.body.description
    }

    await Project.update(payload, {where: { id: req.params.id }})
    const data = await Project.findOne({
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

export const deleteProject = async(req, res) => {
  try {
    const data = await Project.findOne({
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
    
    const departement = await Departement.findOne({ where:{ id: 1 } });
    await data.removeDepartement(departement);
    await Project.destroy({
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