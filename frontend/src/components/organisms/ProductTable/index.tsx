import React, { useEffect, useState } from "react";
import { FETCH_ALL_DATA } from "../../../services";
import styled from "@emotion/styled";
import { Box, Grid, Paper, Table, TableCell, TableHead, TableRow } from "@mui/material";
import TextField from "../../atoms/TextField";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from "../../atoms/Button";
import Typography from "../../atoms/Typography";
import { ADDNEWPRODUCT, PRODUCT } from "../../../utils/constant";

interface ProductProps {
  id: number;
  name: string;
  Gross: number;
  Net: number;
  VAT: number;
  Stock: string;
  Available: number;
}
const ProductTableContainer=styled(Paper)({
   height:'auto',
   width:'100%',
   background:'lightgray',
   marginTop:'40px'
   
})

const SerachContaner=styled(Box)({
    display:'flex',
     width:'100%',
     height:'auto',
    //  background:'white',
     justifyContent:'space-between'

})

const GridContainer=styled(Grid)({
    display:'flex',
    gap:10,
    height:"auto" ,
    paddingLeft:'10px',
    padding:'10px',
    margin:'10px'
})
const TopContainer=styled(Box)({
    display:'flex',
    justifyContent:"space-between",
    margin:'20px'
})
const ProductTable = () => {
  const [productData, setProductData] = useState<ProductProps[]>([]);
  const [search,setSearch]=useState("");

  useEffect(() => {
    FETCH_ALL_DATA()
      .then((data) => {
        console.log(data);
        setProductData(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  const handleSearch=(e:React.ChangeEvent<HTMLInputElement>)=>{
         const searchValue=e.target.value;
         console.log(searchValue);
         setSearch(searchValue);
  }
  return (
   <ProductTableContainer>
    <TopContainer>
     <Typography variant="h3" children={PRODUCT} />
     <Button variant="contained" children={ADDNEWPRODUCT} />
    </TopContainer>

    <SerachContaner>
        <TextField placeholder="Search by Name" sx={{width:'30%'}} value={search} onChange={handleSearch}/>
         <GridContainer >
         <Button  variant="outlined"><Typography variant="body2" children="Filter by"/></Button>
         <Button  variant="outlined"><Typography variant="body2" children="Sort by"/></Button>
         </GridContainer>
    </SerachContaner>
    <Table>
        <TableHead>
            <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Gross</TableCell>
            <TableCell>Net</TableCell>
            <TableCell>VAT</TableCell>
            <TableCell>Stock</TableCell>
            <TableCell>Available</TableCell>
            </TableRow>
        </TableHead>
    {
        productData.filter((data)=>data.name.toLowerCase().includes(search.toLowerCase()))
        .map((data)=>(
            <TableRow key={data.id}>
            <TableCell>{data.name}</TableCell>
            <TableCell>{data.Gross}</TableCell>
            <TableCell>{data.Net}</TableCell>
            <TableCell>{data.VAT}</TableCell>
            <TableCell>{data.Stock}</TableCell>
            <TableCell>{data.Available}</TableCell>
            <TableCell>{<EditIcon/>}</TableCell>
            <TableCell>{<DeleteIcon/>}</TableCell>
            </TableRow>
        ))
     
    }
    </Table>
   </ProductTableContainer>
  )
  
};

export default ProductTable;
