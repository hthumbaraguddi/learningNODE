
const path = require('path');
const rootDirectory = require('../util/path');
const fs = require('fs');
const { error } = require('console');
const { fileURLToPath } = require('url');
const fileName = path.join(rootDirectory,'data','products.json');
module.exports = class Product{
    constructor(t){
        this.title = t;
    }

    save(){
        
        console.log('rootDirectory:', rootDirectory);
        
        fs.readFile(fileName,(error,fileContent)=>{
            let products =[];
            if(!error){
                products =  JSON.parse(fileContent);
            }
            products.push(this);
            fs.writeFile(fileName,JSON.stringify(products),(error)=>{
                console.log("error while writing product file")
            })
        })
    }

    static fetchAll(callBack){
        fs.readFile(fileName,(error,fileContent)=>{
            if(error){
                callBack([]);
            }
            callBack(JSON.parse(fileContent));
        });
        
    }

};