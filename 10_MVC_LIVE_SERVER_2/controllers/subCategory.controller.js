const subCategory = require("../models/subCategory.schema")

const sub_create = async (req, res) =>{
    try {
          const data = await subCategory.create(req.body);
        res.send(data)
    } catch (error) {
        res.send(error.message)
    }
  
}

module.exports = {sub_create}