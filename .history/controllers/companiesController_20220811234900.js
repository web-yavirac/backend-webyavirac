const Companie = require("../models/Companies")


exports.crearCompanie = async (req, res) => {

    try {
        let companie;

        // Creamos nuestro producto
        companie = new Companie(req.body);

        await companie.save();
        res.send(companie);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerCompanies = async (_req, res) => {

    try {

        const companie = await Companie.find();
        res.json(companie)
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

exports.actualizarCompanie = async (req, res) => {

    try {
        const { name, logo, link, type } = req.body;
        let companie = await Companie.findById(req.params.id);

        if(!companie) {
            res.status(404).json({ msg: 'No existe la empresa' })
        }

        companie.name = name;
        companie.logo = logo;
        companie.link = link;
        companie.type = type;

        companie = await Companie.findOneAndUpdate({ _id: req.params.id },companie, { new: true} )
        res.json(companie);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}


exports.obtenerCompanie = async (req, res) => {

    try {
        let companie = await Companie.findById(req.params.id);
        res.json(companie)

        if(!companie) {
            res.status(404).json({ msg: 'No existe la empresa' })
        }
       
        res.json(Companie);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.eliminarCompanie = async (req, res) => {

    try {
        let companie = await Companie.findById(req.params.id);

        if(!companie) {
            res.status(404).json({ msg: 'No existe la empresa' })
        }
       
        await Companie.findOneAndRemove({ _id: req.params.id })
        res.json({ msg: 'Empresa eliminada con exito' });
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}