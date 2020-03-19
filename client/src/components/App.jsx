import React from 'react';
import Capacity from './Capacity.jsx';
import Amenities from './Amenities.jsx';
import AboutTheSpace from './AboutTheSpace.jsx';
import SleepingArangements from './SleepingArangements.jsx';




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
        return (<div>
            <Capacity bed={this.state.currentProperty.bed} bath={this.state.currentProperty.bath} capacity={this.state.currentProperty.capacity}/>
            <Amenities amen={this.state.currentProperty.amenities}/>
            <AboutTheSpace ATS={this.state.currentProperty.about_the_space}/>
            <SleepingArangements SA_bed={this.state.currentProperty.SA_bed} SA_description={this.state.currentProperty.SA_description}/>
          </div>)
        }

}







export default App;