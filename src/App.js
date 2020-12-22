import React from "react";

import Tabulator from "tabulator-tables"; //import Tabulator library
import "tabulator-tables/dist/css/tabulator.min.css"; //import Tabulator stylesheet

 export  default class App extends React.Component {
  el = React.createRef();

  tabulator = null; //variable to hold your table
  
  tableData = [{id:1, name:"Oli Bob", age:"12", col:"red", dob:""},
	{id:2, name:"Mary May", age:"1", col:"blue", dob:"14/05/1982"},
	{id:3, name:"Christine Lobowski", age:"42", col:"green", dob:"22/05/1982"},
	{id:4, name:"Brendon Philips", age:"125", col:"orange", dob:"01/08/1980"},
	{id:5, name:"Margret Marmajuke", age:"16", col:"yellow", dob:"31/01/1999"},]; //data for table to display

  componentDidMount() {
    //instantiate Tabulator when element is mounted
    this.tabulator = new Tabulator(this.el, {
      data: this.tableData,
      width:200,
      layout:"fitColumns",
      //link data to table
      columns: [{title:"Name", field:"name", width:150},
      {title:"Age", field:"age", align:"left", formatter:"progress"},
      {title:"Favourite Color", field:"col"},
      {title:"Date Of Birth", field:"dob", sorter:"date", align:"center"},], //define table columns
    });
  }

  //add table holder element to DOM
  render(){
    return (<div ref={el => (this.el = el)} />);
  }
}
