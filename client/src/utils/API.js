import Axios from "axios"

export default {
    findByID: function(id){
        return Axios.get( "/api/fight/" + id)
},
    findByName: function(name){
    return Axios.get("/api/choose/" + name)
}
}