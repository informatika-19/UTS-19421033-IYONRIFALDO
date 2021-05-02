const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

 mongoose.connect('mongodb://localhost:27017/uts_iyon', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true

}).then(() =>{
    console.log('Berhasil Koneksi')

}).catch((e) => {
    console.log(e)
    console.log('koneksi gagal')
})
app.use(bodyParser.json({
    extends: true, 
    limit: '20mb'
}))
app.use(bodyParser.urlencoded({
    extends: true, 
    limit: '20mb'
}))



app.use('/siswa/',require('./routes/siswa'))

app.listen(5000,() => {
    console.log('Server Started')
})