import React from 'react'
interface ItemListProps{
    items:string[];
}
// const ItemList: React.FC<ItemListProps>=({items})=>{
      
//     return(
            
//     );
// }
const Filter = () => {
    const items = [
        'Apple',
        'Banana',
        'Orange',
        'Grapes',
        'Strawberry',
        'Kiwi',
        'Mango'
      ];
    
 
  return (
    <div>
      <h1>Searchable Item List</h1>
      {/* <ItemList items={items} /> */}
    </div>
  );
  
}

export default Filter