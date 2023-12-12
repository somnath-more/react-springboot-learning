import axios from "axios";

// export const FETCH_DATA=async () => {
//     const res=await axios.get("http://localhost:3001/products");
//     return res.data;
// }
// export const POST_DATA=async (data:{name:string,manufacturer:string,price:number}) => {
//     const res=await axios.post("http://localhost:3001/watchlist",data);
//     return res.data;
// }

// export const  FETCH_WatchList_DATA=async () => {
//     const res=await axios.get("http://localhost:3001/watchlist");
//     return res.data;
// }

const instance=axios.create({
    baseURL:'http://localhost:8080',
})
export const FETCH_DATA = async () => {
    const res = await instance.get("/store");
    return res.data;
  };
  
  export const POST_DATA = async (data: { name: string, manufacturer: string, price: number }) => {
    const res = await instance.post("/store", data);
    console.log("Saved");
    console.log(res.data);
    return res.data;
  };
  
  export const FETCH_WatchList_DATA = async () => {
    const res = await instance.get("/store/watchlist");
    return res.data;
  };
