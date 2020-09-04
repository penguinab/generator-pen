const Generator = require('yeoman-generator')
const pkg = require("../../package.json")
module.exports=class extends Generator{
    constructor(){
        this.config.save();//此方法将配置写入.yo-rc.json文件。如果该文件尚不存在，则该save方法将创建该文件
    }
    prompting(){
        return this.prompt([{
                type:'input',
                name:'projectName',
                message:'your projectName value',
                default:this.appname
            },
            {
                type: 'input',//在页面互动 输入
                name: 'version',
                message: '请输入你项目的版本',
                default: '1.0.0'
            },
            {
                type: 'input',//在页面互动 输入
                name: 'description',
                message: '请输入你项目的描述',
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
            if(dirPath.includes(path)){
                this.fs.copyTpl(this.templatePath(`${path}/**/*`),this.destinationPath(path),this.res)
            }else{
                this.fs.copyTpl(this.templatePath(path),this.destinationPath(path),this.res,{},{
                    globOptions: { 
                        dot: true,
                        // ignore:"_*.*"// < but here 
                    } 
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