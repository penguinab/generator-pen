const Generator = require('yeoman-generator')

module.exports=class extends Generator{
    prompting(){
        return this.prompt([{
                type:'input',
                name:'projectName',
                message:'your projectName value',
                default:this.appname
            },
            // {
            //     type:'confirm',
            //     name:'sucess',
            //     message:'if show mgs',
            //     default:false
            // }
        ]).then(res=>{
            this.res=res
        })
    }
    writting(){
        const filePath=[
            "public",
            "src",
            ".browserslistrc",
            ".eslintrc.js",
            "package.json",
            "README.md",
        ]
        const dirPath =["public","src"]
        filePath.forEach(path=>{
            console.log(path)
            if(dirPath.includes(path)){
                this.fs.copyTpl(this.templatePath(`${path}/**/*`),this.destinationPath(path),this.res)
            }else{
                this.fs.copyTpl(this.templatePath(path),this.destinationPath(path),this.res,{},{
                    globOptions: { dot: true } 
                })
            }
        })
       // this.fs.write(
        //    this.destinationPath('avb.text'),
        //    Math.random().toString()
       // )
    //    const tPath= this.templatePath('test.text')
    //    const dPath= this.destinationPath('test.text')

    //    this.fs.copyTpl(tPath,dPath,this.res)
    }
}