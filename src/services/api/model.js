import httpClient from '@/plugins/axios';

export default class Model {
    constructor(path) {
        this.path = path;
    }

    async save(object){
        await httpClient.post(this.path, object);
    }

    async update(object){
        await httpClient.put(this.path, object);
    }

    async list(){
        await httpClient.get(this.path);
    }

    async remove(id){
        await httpClient.delete(this.path+"/"+id);
    }
}
