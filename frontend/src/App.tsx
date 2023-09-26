import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/ReactLearn/Home";
import About from "./components/pages/ReactLearn/About";
import UseEffectPage from "./components/pages/ReactLearn/UseEffectPage";
import { Component1, Component5 } from "./components/pages/ReactLearn/USeContext";
import { useState, createContext, useContext } from "react";
import One from "./components/organisms/nonusecontext/One";
import USECONTEXT from "./components/organisms/usecontext/One";
const App = () => {
    return (
      <BrowserRouter>
      <Routes>
        <Route  path="/" element={<Home/>}/>
        <Route  path="/nonusecontext" element={<One user={"Somnath"}/>}/>
        <Route  path="/usecontext" element={<USECONTEXT/>}/>
        <Route  path="/about" element={<About/>}/>
        <Route path="/UseEffectPage" element={<UseEffectPage/>}/>
        <Route path="/component1" element={<Component1/>}/>
        <Route path="/component5" element={<Component5/>}/>
      </Routes>
      </BrowserRouter>
    
    )
  }
  
  export default App;
// import React, { useState, useEffect } from 'react';
// import { servicesVersion } from "typescript";

// interface ItemListProps {
//   items: string[];
// }

// const ItemList: React.FC<ItemListProps> = ({ items }) => {
//   const [searchQuery ,setSearchQuery]=useState('');
// const [filteredItems,setFilteredItems]=useState<string[]>([])
// useEffect(()=>{
//     const updatedFilteredItems=items.filter(item=>
//       item.toLowerCase().includes(searchQuery.toLowerCase()
//       ));
//        setFilteredItems(updatedFilteredItems)
// },[items,searchQuery])

//   return (
//     <div>

//         <input
//         type="text"
//         placeholder="Search..."
//         value={searchQuery}
//         onChange={(e) => setSearchQuery(e.target.value)}
//       />
//         <ul>
//          { filteredItems.map((item,index)=>(
//             <li key={index} >{item}</li>
//           ))}
//         </ul>

      
//     </div>

//   );
// };

// const App: React.FC = () => {
//   const items = [
//     'Apple',
//     'Banana',
//     'Orange',
//     'Grapes',
//     'Strawberry',
//     'Kiwi',
//     'Mango'
//   ];

//   return (
//     <div>
//       <h1>Searchable Item List</h1>
//       <ItemList items={items} />
//     </div>
//   );
// };

// export default App;
