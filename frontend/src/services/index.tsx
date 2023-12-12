import axios from "axios"

export const FETCH_ALL_DATA= async () => {
    const res=await axios.get(' http://localhost:3001/products');
    return res.data;
}