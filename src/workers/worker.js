const peticionesApi = {
    async curso (){
        try {
        
        } catch (error) {
            
        }
    }
}




self.addEventListener('message', async (data)=>{
    console.log(data);
    let respuesta= "la yo sabia que podia";
    postMessage(respuesta);
});