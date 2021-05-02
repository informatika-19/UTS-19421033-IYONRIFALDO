const siswaModel = require ('../model/siswa')
const objectid = require('mongoose').Types.ObjectId

exports.create = (data) =>
new Promise((resolve, reject) =>{
    siswaModel.create(data)
    .then(() => resolve ({
        status : true,
        pesan  : 'Berhasil input'
    })).catch (() => reject({
        status : false,
        pesan  : 'Gagal input'
    }))

})


exports.showAllData = () =>
new Promise((resolve, reject)=>{
siswaModel.find()
  .then (result =>{
    resolve({
      status : true,
      pesan : 'Berhasil Menampilkan Data',
      data : result
    })
  }).catch(()=> reject ({
    status : false,
    pesan : 'Gagal Menampilkan Data',
    data : []
  }))
})  

exports.showbyID = (id) =>
new Promise((resolve, reject) => {
siswaModel.findOne({
    _id: objectid(id)
  }).then (result =>{
    resolve({
      status : true,
      pesan : 'Berhasil Menampilkan Data',
      data : result
    })
  }).catch(()=> reject ({
    status : false,
    pesan : 'Gagal Menampilkan Data',
    data : null
  }))
})

exports.update = (id, data)=>
  new Promise((resolve, reject)=>{
    siswaModel.updateOne({
      _id: objectid(id)
    }, data).then (() => resolve({
        status : true,
        pesan : ' Update Berhasil ',
      })).catch(()=> reject ({
      status : false,
      pesan : 'Update Gagal',
    }))
  })

exports.delete = (id) =>
    new Promise((resolve, reject)=>{
      siswaModel.deleteOne({
        _id: objectid(id)
      }).then (() => resolve({
        status : true,
        pesan : 'Berhasil Menghapus Data',
        })).catch(()=> reject ({
        status : false,
        pesan : 'Gagal Menghapus Data',
        }))
    })