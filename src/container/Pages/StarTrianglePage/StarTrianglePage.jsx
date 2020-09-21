import React, { Component } from 'react';
// import HelloWorld from '../../../component/HelloWorld/HelloWorld';

class StarTrianglePage extends Component {

    state = {
        valueNumber: '',
        valueStar: '',
        arrayStar: []
    }

    // showStar = (number) => {
    //     for (let i = 1; i <= number + 1; i++) {
    //             <p>*</p>
    //     }
    // }

    handleFormChange = (event) => {
        // console.log("value : ", event.target.value);
        let valueNumberNew = event.target.value;
        this.setState({
            valueNumber: valueNumberNew
        })
    }
    
    handleSubmit = () => {
        console.log("Value new : ", this.state.valueNumber);

        let valueStarNew = this.state.valueNumber

        this.setState({
            valueStar: valueStarNew
        })

        this.showStar(this.state.valueStar)
    }

    render(){
        return(
            <div className="card">
                <div className="card-body">
                    <div className="form-group">
                        <label>Input</label>
                        <input type="number" name="quantity" min="1" onChange={this.handleFormChange}/>
                    </div>
                </div>
                <div className="card-footer">
                    <button className="btn btn-success" onClick={this.handleSubmit}>Submit</button>
                </div>
            </div>
        )
    }
}

export default StarTrianglePage;