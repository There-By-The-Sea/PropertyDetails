import React from 'react';

class SleepingArangements extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }


    }


    render() {
        return (
            <div className="SA_list">
        <div className="SA_bed"> these are the number of beds: {this.props.SA_bed}</div>
        <div className="SA_description"> this is the SA discription: {this.props.SA_description}</div>
        </div>
        )
        
    }



}





export default SleepingArangements;