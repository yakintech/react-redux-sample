const baseurl = "https://jsonplaceholder.typicode.com/"


export const basemanager = {

    getAll: async (url) => {

        let response = [];
        await fetch(baseurl + url)
            .then(res => res.json())
            .then(data => {
                response = data;
            })

        return response;
    }

}