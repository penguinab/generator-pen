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
            "public/favicon.ico",
            "public/index.html",
            "src/assets/logo.png",
            "src/components/HelloWorld.vue",
            "src/App.vue",
            "src/main.js",
            ".browserslistrc",
            ".eslintrc.js",
            "package.json",
            "package-lock.json",
            "README.md",
        ]

        filePath.forEach(path=>{
            this.fs.copyTpl(this.templatePath(path),this.destinationPath(path),this.res)
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