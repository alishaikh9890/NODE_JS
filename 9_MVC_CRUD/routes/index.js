const express = require("express");

const routes = express.Router();

const multer = require("multer");

// fileuploads
const storage = multer.diskStorage({
    destination : (req, res, cb) => {
         cb(null, "uploads/")
    },
    filename : (req, file, cb) =>{
        cb(null, file.originalname);
    }
})

const imageUpload = multer({storage : storage}).single("image");

const crudcontroller = require("../controllers/CrudController");

routes.get("/", crudcontroller.index);

routes.post("/insertData", imageUpload, crudcontroller.addData);

module.exports = routes;