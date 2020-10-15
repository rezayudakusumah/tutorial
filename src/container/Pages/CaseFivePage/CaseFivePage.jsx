import React, { Component, Fragment } from 'react';

class CaseFivePage extends Component {

    state = {
        data: [4, 5, 8, 9, 0, 2, 8, 2, 11, 15, 2, 9, 0],
        output: []
    }

    handleSubmit = () => {

        let array = this.state.data

        let arrayFilter = array.filter((value, index) => array.indexOf(value) === index)
        // console.log(arrayFilter);

        let arrayResult = arrayFilter.sort((a, b) => {
            return a - b
        })

        this.setState({
            output: arrayResult
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

export default CaseFivePage;