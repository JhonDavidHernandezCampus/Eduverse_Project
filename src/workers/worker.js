
const peticionesApi = {
    async getVideos(data) {
        let url = data.data.url;
        try {
            let response = await fetch(`http://192.168.128.23:5010/cursos/v2?course=${url}`, {
                method: "GET"
            });
            response = await response.json();
            // console.log(response);
            return response;
        } catch (error) {
            return { Message: "Error al realizar la consulta al API" }
        }
    },

    async user(data) {
        try {
            let serve = data.data;
            let response = await fetch(`http://${serve.localhost}:${serve.port}/get`, {
                method: "GET",
                credentials: "include",
            });
            let user = await response.json();
            return user;
        } catch (error) {
            return "error fetching data:" + error.name;
        }
    }
}

self.addEventListener('message', async (data) => {
    let fuction = data.data.function;
    let response = await peticionesApi[fuction](data.data);
    postMessage(response);
});
