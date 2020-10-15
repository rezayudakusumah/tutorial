import React, { Component, Fragment } from 'react';

class CaseFourPage extends Component {

    state = {
        data: [23, 45, 67, 90, 23, 1, 6, 90, 12, 43, 90, 67],
        output: []
    }

    handleSubmit = () => {

        let array = this.state.data

        let arrayFilter = array.filter((value, index) => array.indexOf(value) === index)
        // console.log(arrayFilter);

        this.setState({
            output: arrayFilter
        })

    }

    render(){
        return (
            <Fragment>
                <p>Data: {this.state.data}</p>
                <button onClick={this.handleSubmit}>Submit</button>
                <p>{this.state.output}</p>
            </Fragment>
        )
    }
}

export default CaseFourPage;