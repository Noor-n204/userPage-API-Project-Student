const renderer = new Renderer()
const apiManager = new APIManager()

apiManager.getAllData().then(()=>{
    renderer.renderAll(apiManager.data)
})


const display = function(){
    apiManager.getAllData().then(()=>{
        renderer.renderAll(apiManager.data)
    })
}



