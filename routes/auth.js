const express = require('express')
 const bcrypt = require('bcrypt')
 const multer = require('multer')
 const User = require('../db_module/user')
 const router = express.Router()

  // Routes
  router.get('/login', (req, res) => {
    res.render('pages/login')
})

router.post('/login', async (req, res) => {
    // Authenticate user
})

router.get('/register', (req, res) => {
    res.render('pages/register')
})

router.post('/register', async (req, res) => {
    // Register new user
})

router.get('/logout', (req, res) => {
    // Logout user
})

module.exports = router