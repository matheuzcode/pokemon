import axios from "axios";

const baseURL = "https://pokeapi.co/api/v2/"

export const axiosApi = axios.create({
    baseURL
})

// export const Api = () => {
//     return {
//         funcionarios: async () => { return await axiosApi.get("/funcionarios.php") }
//     }
// }