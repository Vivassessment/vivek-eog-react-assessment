import { getData } from "../constants";

const fetchWheatherData = (payload) =>{
        return { type :getData , payload:payload }
}

export {
    fetchWheatherData,
}