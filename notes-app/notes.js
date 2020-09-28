const fs = require('fs');
const chalk = require('chalk');

const addNote = (title,body) => {
     const notes = loadNotes();
     const duplicateNote = notes.find(
       (note) => note.title === title
       );
     debugger;
     if(!duplicateNote){
          notes.push({
               title:title,
               body:body
          });
     
          saveNotes(notes);
          console.log(
            'Note addition: '+
            chalk.green.bold('successful')
            );
     }else{
          console.log(
            chalk.red.bold('Error: Title taken'));
     };
     

};

listNotes = () => {
     const notes = loadNotes();
     notes.forEach((note)=>{
          console.log(`Title: ${note.title}`);
     });
     
};

readNote = (title) => {
     const notes = loadNotes();
     const duplicateNote = notes.find(
       (note) => note.title === title
       );
     if(duplicateNote){
          console.log(`
               ${chalk.green.bold('Title:')} ${duplicateNote.title}
               ${chalk.green.bold('Body:')}  ${duplicateNote.body}
          `);
     }else{
          console.log(
            chalk.red.bold('Error: Title Does Not Exist')
            );
     };
};

const removeNote =  (title) => {
     const notes = loadNotes();
     const remainingNotes = notes.filter(
       (note) => note.title !== title
       );
       
     if(remainingNotes.length !== notes.length){
    
          saveNotes(remainingNotes);
          console.log(
            'Note Removal: '+
            chalk.green.bold('successful')
            );
     }else{
          console.log(
            chalk.red.bold('Error: Title Not Found'));
     };
};

const saveNotes =  (notes) => {
     const dataJSON = JSON.stringify(notes);
     fs.writeFileSync('notes.json',dataJSON);
};

const loadNotes =  () => {
     try {
          const dataBuffer = fs.readFileSync('notes.json');
          const dataJSON = dataBuffer.toString();
          return JSON.parse(dataJSON);    
     } catch (e) {
          return [];
     }
     
};
module.exports = { 
     addNote: addNote, 
     removeNote: removeNote,
     listNotes : listNotes,
     readNote : readNote
     } ;
