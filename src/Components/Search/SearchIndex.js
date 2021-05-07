import React, {Component} from 'react';
import {Input} from 'reactstrap';
import { targetPropType } from 'reactstrap/lib/utils';
 
class SearchIndex extends Component {
  constructor(props){
    super(props)
    this.state = {
     things: ['pen', 'marker', 'eraser', 'notebook', 'pencil', 'scissors', 'highlighter', 'stapler', 'paper clip', 'binder', 'hole punch', 'laminator', 'laminating sheets', 'protective sheets', 'index cards'],
     filtered: []
   }
   this.handleChange = this.handleChange.bind(this);
 }
     componentDidMount() {
         console.log(this.state.things)
         this.setState({
           filtered: this.state.things
         });
       }
       
     componentWillReceiveProps(nextProps) {
         console.log(nextProps)
         this.setState({
           filtered: nextProps.things
         });
       }
 
     handleChange(e) {
         let currentThing = [];
         let newThing = [];
 
         if (e.target.value !== "") {
         currentThing = this.state.things;
         console.log(currentThing)
 
         newThing = currentThing.filter(thing => {
         const lc = thing.toLowerCase();
         const filter = e.target.value.toLowerCase();
 
         return lc.includes(filter);
          });
         } else {
         newThing = this.state.things;
         }
         this.setState({
         filtered: newThing
         });
     }
 
     render() {
         return (
             <div>
               <Input placeholder="search" onChange= {this.handleChange}></Input>
                 <ul>
                     {this.state.filtered.map(thing => (
                         <li key={thing}>{thing} &nbsp;</li>
                         ))}
                 </ul>
             </div>
         )
     }
 }
 
 export default SearchIndex;