
const util = require("util")
const fs = require("fs")
const db = require("./db.json")
const readFileAsync = util.promisify(fs.readFile)
const writeFileAsync = util.promisify(fs.writeFile)

const Store = {



    write: function() {

        return writeFileAsync('./db.json',JSON.stringify(db), 'utf8')
    },

    getNotes: function(){

        //this is the event handler 
        // return this.read().then((notes) => {
        //     let parsedNotes;
        //     try {
        //         parsedNotes = [].concat(JSON.parse(notes));  //
                
        //     } catch (error) {
        //         parsedNotes = [];
                
        //     }
        //     return parsedNotes
        // })
        return db
    },

    addNote: function(note){

        const { title, text } = note;
        if(!title || !text) {
            throw new Error("You cannot enter a blank note")
        }

        const newNote = {
            title,
            text
        };

        //return this.getNote()
        //.then((notes) => [...notes, newNote])
        //.then((updateNotes) => this.write(updateNotes))
       // .then(() => newNote);
    //control forward slash

        db.push(newNote)

        this.write()

    }

    


}

module.exports = Store
