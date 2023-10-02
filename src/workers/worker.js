const peticionesApi = {
    async user() {
        try {
            let response = await fetch("http://127.1.1.1:9001/get", {
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
    let user = await peticionesApi.user();
    console.log("user en evento", user);
    console.log(data);
    postMessage(user);
});