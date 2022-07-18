import createApiClient from "./api.server"

class ContactServer {
    constructor(baseURL="/api/contacts") {
        this.api = createApiClient(baseURL);
    }
    async getAll(){
        return(await this.api.get("/")).data;
    }
    async create(data){
        return(await this.api.post("/",data)).data;
    }
    async deleteALl(){
        return(await this.api.delete("/")).data;
    }
    async get(id){
        return(await this.api.get(`/${id}`)).data;
    }
    async update(id,data){
        return(await this.api.put(`/${id}`,data)).data;
    }
    async delete(id){
        return(await this.api.delete(`/${id}`)).data;
    }
}

export default new ContactServer;