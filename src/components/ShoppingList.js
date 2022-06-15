import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";
import { v4 as uuid } from "uuid";

function ShoppingList({ items , setNewItemList}) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchVaue, setSearch] = useState("")
  const [newCat, setNewCat] =useState("Produce")
  const [newName, setNewName] =useState("")
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  }).filter((items)=>items.name.includes(searchVaue));

  function search(event){
   setSearch(event.target.value)
  }
  // function onItemFormSubmit(event){
  
  //   event.preventDefault();
  //   const newItem = {
  //     id: 10, // the `uuid` library can be used to generate a unique id
  //     name: newName,
  //     category: newCat,
  //   };
  //   const newList =[...items,newItem]
  //   setItems(newList)
  // }
  const onItemFormSubmit = (event)=>{
    event.preventDefault();
    const newItem = 
    { id: uuid, name: newName, category: newCat }
    const newList =[...items,newItem]
    setNewItemList(newList)
  }

  function handleNewCat(event){
    setNewCat(event.target.value)

  }
  function handleNewName(event){
    setNewName(event.target.value)  }

  return (
    <div className="ShoppingList" >
      <ItemForm onItemFormSubmit={onItemFormSubmit} handleNewCat={handleNewCat} newName={handleNewName}/>
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={search}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
