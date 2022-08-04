const router=require("express").Router()
const fs=require("fs")
const db=require("../db/db.json")

router.get("/api/notes",(req,res)=>{
     res.json(db)
})


router.post("/api/notes", (req, res)=>{

    console.log(req.body)

    //db is array, think about array function to add new element or value of an array
    //think about update the revised db with new data into the db.json file
    const {title, text} = req.body

    if (title && text) {
        const newNote = {
            title,
            text
        };
    }

    fs.readFile(db, 'utf8', (err, data) => {
        if (err) {
            console.log(err);
        } else {
            const parsedNotes = JSON.parse(data);
        }

        parsedNotes.push(newNote)

        fs.writeFile(
            db,
            JSON.stringify(parsedNotes, null, 4), //what does the 4 stand for?
            (writeErr) => 
            writeErr
            ? console.log(writeErr)
            : console.info('Successfully update reviews!')

        )

    })
   // db.push(req.body)

    
})

module.exports=router