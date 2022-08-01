const {
    Router
} = require('express')
const {
    findByIdAndUpdate
} = require('../Model/Student')
const router = Router()
const Student = require('../Model/Student')

router.get('/', async (req, res) => {
    const students = await Student.find()
    res.render('index', {
        title: 'Home page',
        students
    })
})
router.get('/add/student', async (req, res) => {
    res.render('addStudent', {
        title: 'Add Student',
    })
})
router.post('/add/student', async (req, res) => {
    const student = new Student({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        Group: req.body.Group,
        Course: req.body.Course,
        phoneNumber: req.body.phoneNumber,
        Score: req.body.Score
    })
    await student.save()
    res.redirect('/')
})

router.post('/update/:id', async (req, res) => {
    const id = req.params.id
    const student = await Student.findById(id)
    student.Score++
    await student.save()
    res.redirect('/')
})

module.exports = router