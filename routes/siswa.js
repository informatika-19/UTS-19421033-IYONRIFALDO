const router = require('express').Router()
const siswaController = require('../controller/siswa')

router.post('/create/', (req, res)=> {
    siswaController.create(req.body)
        .then(result =>res.json(result))
        .catch(err => res.json(err))
  })
  
  router.get('/showalldata/', (req, res)=> {
    siswaController.showAllData()
        .then(result =>res.json(result))
        .catch(err => res.json(err))
  })
  
  router.get('/showdatabyid/:id', (req, res)=> {
    siswaController.showbyID(req.params.id)
        .then(result =>res.json(result))
        .catch(err => res.json(err))
  })
  
  router.put('/update/:id', (req, res)=> {
    siswaController.update(req.params.id, req.body)
        .then(result =>res.json(result))
        .catch(err => res.json(err))
  })
  
  router.delete('/delete/:id', (req, res)=> {
    siswaController.delete(req.params.id)
        .then(result =>res.json(result))
        .catch(err => res.json(err))
  })

  module.exports = router