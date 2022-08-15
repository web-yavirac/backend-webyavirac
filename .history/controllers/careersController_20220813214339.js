const Career = require("../models/Careers.js")


exports.crearCareer = async (req, res) => {

    try {
        let career;

        // Creamos nuestro producto
        career = new Career(req.body);

        await career.save();
        res.send(career);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerCareers = async (_req, res) => {

    try {

        const career = await Career.find();
        res.json(career)
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

exports.actualizarCareer = async (req, res) => {

    try {
        const { banner, code, coordinador_name, coordinador_correo, cost, 
            teachers,teachers_link,curriclar_mesh,curricular_mesh_pdf, modality , name , 
            resolution, resolution_pdf,title, section_text, section_video, duration} = req.body;
        let career = await Companie.findById(req.params.id);

        if(!career) {
            res.status(404).json({ msg: 'No existe la empresa' })
        }

        career.banner = banner;
        career.code = code;
        career.coordinador_name = coordinador_name;
        career.coordinador_correo = coordinador_correo;
        career.cost = cost;
        career.teachers = teachers;
        career.teachers_link = teachers_link;
        career.curricular_mesh = curricular_mesh;
        career.curricula_mesh_pdf = curricula_mesh_pdf;
        career.modality = modality;
        career.name = name;
        career.resolution = resolution;
        career.resolution_pdf = resolution_pdf;
        career.title = title;
        career.section_text = section_text;
        career.section_video = section_video;
        career.duration = duration;
        

        career = await Career.findOneAndUpdate({ _id: req.params.id },career, { new: true} )
        res.json(career);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}


exports.obtenerCareer = async (req, res) => {

    try {
        let career = await Career.findById(req.params.id);
        res.json(career)

        if(!career) {
            res.status(404).json({ msg: 'No existe la empresa' })
        }
       
        res.json(Career);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.eliminarCareer = async (req, res) => {

    try {
        let career = await Career.findById(req.params.id);

        if(!career) {
            res.status(404).json({ msg: 'No existe la empresa' })
        }
       
        await Career.findOneAndRemove({ _id: req.params.id })
        res.json({ msg: 'Empresa eliminada con exito' });
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}