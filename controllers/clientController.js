import { userMdel } from "../model/clientModel.js"

export const createClientController = async (req, res) => {
    const { name, lastname, mobile, email, project } = req.body
    try {
        if (!name || !lastname || !mobile || !email || !project) {
            return res.status(400).json({ status: 400, success: false, message: "All field required !" })
        }
        const newClient = await userMdel({
            name, lastname, mobile, email, project
        })
        newClient.save()
        res.status(201).json({ status: 201, success: true, message: "New Client Created !", data: newClient })
    } catch (error) {
        console.log(error)
        res.status(400).json({ status: 400, success: false, message: "Server error" })
    }
}

export const getClientsController = async (req, res) => {
    try {
        const allclient = await userMdel.find()
        res.status(201).json({ status: 201, success: true, message: "New Client Created !", data: allclient })
    } catch (error) {
        console.log(error)
        res.status(400).json({ status: 400, success: false, message: "Server error" })
    }
}


export const getClientController = async (req, res) => {

    const { id } = req.params
    try {
        const singleclient = await userMdel.findById(id)
        res.status(201).json({ status: 201, success: true, message: "Single Client  !", data: singleclient })
        
    } catch (error) {
        console.log(error)
        res.status(400).json({ status: 400, success: false, message: "Server error" })
    }
}

export const updateClientController = async (req, res) => {
    const { id } = req.params
    const { name, lastname, mobile, email, project } = req.body
    try {
        const updateclient = await userMdel.findByIdAndUpdate(id, { name, lastname, mobile, email, project }, { new: true })
        updateclient.save()
        res.status(201).json({ status: 201, success: true, message: "Client Updated !", data: updateclient })
    } catch (error) {
        console.log(error)
        res.status(400).json({ status: 400, success: false, message: "Server error" })
    }
}


export const deleteClientController = async (req, res) => {
    const { id } = req.params
    console.log(id)
    try {
        const deleteclient = await userMdel.findByIdAndDelete(id)
        res.status(201).json({ status: 201, success: true, message: "Client deleted !", data: deleteclient })
    } catch (error) {
        console.log(error)
        res.status(400).json({ status: 400, success: false, message: "Server error" })
    }
}