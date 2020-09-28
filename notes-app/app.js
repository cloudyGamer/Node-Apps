const validator = require('validator');
const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');

//console.log(process.argv);
yargs.version('1.1.0');
//create add command
yargs.command({
     command: 'add',
     describe: 'Add a new note',
     builder: {
          title: {
               describe: 'Note Title',
               demandOption: true,
               type: 'string'
          },
          body: {
               describe: 'Note Body',
               demandOption: true,
               type: 'string'
          }
     },
     handler (argv) {
          notes.addNote(argv.title,argv.body);
     }
});
//create remove command
yargs.command({
     command: 'remove',
     describe: 'remove a note',
      builder: {
          title: {
               describe: 'Note Title to be removed',
               demandOption: true,
               type: 'string'
          }
     },
     handler (argv) {
          notes.removeNote(argv.title);
          console.log('removing note');
     }
});
//create list command
yargs.command({
     command: 'list',
     describe: 'list a note',
     handler () {
          notes.listNotes();
          console.log('listing note');
     }
});
//create read command
yargs.command({
     command: 'read',
     describe: 'read a note',
     builder: {
          title: {
               describe: 'Note Title to be read',
               demandOption: true,
               type: 'string'
               }
          },
     handler (argv) {
          notes.readNote(argv.title);
          console.log('reading note');
     }
});
//console.log(yargs.argv);
yargs.parse();



