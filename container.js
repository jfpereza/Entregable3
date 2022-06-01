const fs = require('fs')

class Contenedor {
    constructor(filename) {
        console.log('Contenedor')
        this.filename = filename
        this.data = []
        try {
            this.read()
        } catch(e) {
            console.log('error file')            
            this.write()
        }
    }
    write() {
        fs.promises.writeFile(this.filename, JSON.stringify(this.data))
            .then( () => {
                console.log('Data saved')
            })
            .catch( e => console.log(e) )
    }
    read() {
        fs.promises.readFile(this.filename)
            .then( data => {
                this.data = JSON.parse(data)
                console.log('Data loaded!')
            })
            .catch( e => console.log(e) )
    }
    getLastID() {
        const l = this.data.length
        if(l < 1) return 0
        return this.data[this.data.length - 1].id
    }
     async save(obj) {
        const id = this.getLastID()
        this.data.push({
            ...obj, ...{id:id + 1}
        })
        this.write()
        try{
            await fs.promises.writeFile('./file2.json','utf-8');
            return console.log("registrado");
        } catch{
            return console.log("no registrado"); 
        }
    }

    getByID(id) {
        return this.data.find(p => p.id == id)
    }

    getAll() {
        return this.data
    }
    
    async deleteById(id) {
        try {
        const idx = await fs.promises.readFile(this.filename);
        const contenido = JSON.parse(idx);
        const contBorrar = contenido.filter((p) => p.id !== id)
        await fs.promises.writeFile(this.filename, JSON.stringify(contBorrar))
        } catch (error) {
            return('error')
        }
    }
    deleteAll() {
        this.data = []
        this.write()
    }
}
module.exports = Contenedor