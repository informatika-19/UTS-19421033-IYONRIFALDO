const mongoose = require('mongoose')
const Schema = mongoose.Schema

const siswaSchema = new Schema({
    NamaLengkap:{
        type: String
        },
        JudulBuku:{
            type: String
        },
        WaktuPinjam:{
            type: String
        },
        Kelas:{
            type: String
        },
        JumlahBuku :{
            type: String
            
        }
})
module.exports =mongoose.model('siswa',siswaSchema)