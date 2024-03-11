import  axios  from "axios";

export const apiCall = async ()=>{
    const response = await axios.get(import.meta.env.VITE_JOB_URL)
    console.log('Jobs are ', response)
    return response.data;
}