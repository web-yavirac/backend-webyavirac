const mongoose = require('mongoose');

const CareersSchema = mongoose.Schema({
    banner: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true
    },
    coordinador_name: {
        type: String,
        required: true
    },
    coordinador_correo: {
        type: String,
        default: Date.now()
    },
    cost: {
        type: String,
        default: Date.now()
    },
    teachers: {
        type: String,
        default: Date.now()
    },
    teachers_link: {
        type: String,
        default: Date.now()
    },
    curricular_mesh: {
        type: String,
        default: Date.now()
    },
    curricular_mesh_pdf: {
        type: String,
        default: Date.now()
    },
    modality: {
        type: String,
        default: Date.now()
    },
    name: {
        type: String,
        default: Date.now()
    },
    resolution: {
        type: String,
        default: Date.now()
    },
    resolution_pdf: {
        type: String,
        default: Date.now()
    },
    title: {
        type: String,
        default: Date.now()
    },
    section_text: {
        type: String,
        default: Date.now()
    },
    section_video: {
        type: String,
        default: Date.now()
    },
    duration: {
        type: String,
        default: Date.now()
    }

});

module.exports = mongoose.model('Careers', CareersSchema);
