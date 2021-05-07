import React, { Component } from 'react';
 
const CatList = (props) => {
 return (
   <div>
     {props.cats.map(cat => <li key={cat}>{cat}</li> )}
   </div>
 )
}
 
export default CatList;
