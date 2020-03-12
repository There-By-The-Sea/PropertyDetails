import React from 'react';
import Capacity from './Capacity.jsx';




class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          currentData: [],
          currentProperty: {}
        }


    }


    getRequestTest() {
      console.log("sent request");
      fetch("http://localhost:5000/api/propertyDetails")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
            this.setState({
              currentData: data,
              currentProperty: data[0]
            })
        })
    }


    componentDidMount(){
      this.getRequestTest();
    }


    render(){
        return ( 
          < Capacity bed={this.state.currentProperty.bed} bath={this.state.currentProperty.bath} capacity={this.state.currentProperty.capacity}/>
          )
        }

}







export default App;