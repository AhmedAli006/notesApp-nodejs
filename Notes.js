
const { demandOption } = require('yargs');
const yargs = require('yargs');
const notes = require('./Notes.js');


// add cmd
yargs.command({
    command:'add',
    describe: 'add a note',
    builder:{
      title:{
            describe:"add a note",
            demandOption:true,
            type:'string'
        } 
    },
    body:{
        describe: "value of the title",
        demandOption:true,
        type:'string'
    },
    handler:function(args){
        // console.log('adding notes',args);
        // console.log("Title : "  + args.title + "body : " + args.body );
        notes.addNotes(args.title,args.body)
    }
})

// remove cmd
yargs.command({
    command:'remove',
    describe: 'remove a note',
    handler:function(){
        console.log(' note removed');
    }
})

// list cmd
yargs.command({
    command:'list',
    describe: 'list a note',
    handler:function(){
        console.log('list all note');
    }
})

// read cmd
yargs.command({
    command:'read',
    describe: 'read the note',
    handler:function(){
        console.log('reading a note');
    }
})

// console.log(yargs.argv); // actually does somthing 
//    ^
yargs.parse()