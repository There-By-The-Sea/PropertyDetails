import React from 'react';





class Capacity extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }


    }



    // <div className='bathNum'> This many bathrooms {this.props.bath} </div>
    // <div className='capacity'> This is the capacity {this.props.capacity} </div>


    render(){
        console.log(this.props);
        return ( 
        <div className='capacityList'> 
           <div className='bedNum' >This many beds avalible {this.props.bed} </div>
           <div className='bathNum'> This many bathrooms {this.props.bath} </div>
           <div className='capacity'> This is the capacity {this.props.capacity} </div>
        </div>
          )
        }

}







export default Capacity;