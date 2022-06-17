const fs = require ('fs');


fs.writeFileSync('data1.txt',url, (error)=> {

    if (error){
        console.log(`Error: ${error}`);
        }
    } )