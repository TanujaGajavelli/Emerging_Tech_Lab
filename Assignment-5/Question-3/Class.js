import fs from 'fs'
class fileOperation{
    constructor(path){
        this.path=path        
    }
    fileRead() {
        let data=fs.readFileSync(this.path,'utf-8')
        console.log(data); 
    }
    fileWrite(newData){
        fs.writeFileSync(this.path,newData,'utf-8')
        this.fileRead()
    }
    fileAppend(newData){
        fs.appendFileSync(this.path,newData,'utf-8')
        this.fileRead()
    }
    fileDelete(){
        fs.unlinkSync(this.path)
        
    }
}
let fileOp=new fileOperation('file.txt')
export default fileOp
