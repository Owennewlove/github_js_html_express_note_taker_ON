const router = require("express").Router()
const fs = require("fs")
//const db = require("../db/db.json")

const Store = require("../db/store")


router.get("/api/notes", (req, res) => {
    res.json(Store.getNotes())
})



router.post("/api/notes", (req, res) => {


    Store.addNote(req.body)
    //db is array, think about array function to add new element or value of an array
    //think about update the revised db with new data into the db.json file

    

    res.json(Store.getNotes())



    // readFileAsync(db, 'utf8', (err, data) => {
    //     console.log(data)
    //     if (err) {
    //         console.log(err);
    //     } else {
    //         const parsedNotes = JSON.parse(data);
    //         console.log(parsedNotes)
    //     }

    //     parsedNotes.push(newNote)

    //     writeFileAsync(
    //         db,
    //         JSON.stringify(parsedNotes), //what does the 4 stand for?
    //         console.log(parsedNotes),
    //         (writeErr) =>
    //             writeErr
    //                 ? console.log(writeErr)
    //                 : console.info('Successfully update reviews!')

    //     )

    // })

    
    // db.push(req.body)


})

module.exports = router