import React, { Component } from 'react';
// import HelloWorld from '../../../component/HelloWorld/HelloWorld';

class NumberTrianglePage extends Component {

    state = {
        theNumber: '',
        arrayNumber: []
    }

    handleFormChange = (event) => {
        console.log("number : ", event.target.value);
        let theNumberNew = event.target.value;
        this.setState({
            theNumber: theNumberNew
        })
    }

    handleSubmit = () => {

        var num = this.state.theNumber
        var outerArray = [];
        var i, j;

        for(i = 1; i < 2*num; i++) {
            var innerArray = [];
            for(j = 1; j < 2*num; j++) {
                if(j < i) {
                    innerArray.push(" ");
                }

                else {
                    innerArray.push(i);
                }
            }
            outerArray.push(innerArray);
        }

        this.setState({
            arrayNumber: outerArray
        }, () => {
            console.log("array number: ", this.state.arrayNumber);
        })

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
                <div>
                    {
                        this.state.arrayNumber.map((array) => {
                            return <p>{array}</p>
                        })
                    }
                </div>
            </div>
            
        )
    }
}

export default NumberTrianglePage;