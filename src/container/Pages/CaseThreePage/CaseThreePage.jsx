import React, { Component, Fragment } from 'react';

class CaseThreePage extends Component {

    state = {
        input: '',
        output: ''
    }

    handleChange = (event) => {
        let inputNew = event.target.value;
        // console.log(this.state.input)
        this.setState({
            input: inputNew
        })
    }

    handleSubmit = () => {

        let output = this.state.input;
        // console.log(output);
        let outputSplit = output.split("");
        let outputReverse = outputSplit.reverse();
        let outputJoin = outputReverse.join("");
        // console.log(outputReverse);

        if(output == outputJoin) {
            this.setState({
                output: 'benar'
            })
        }

        else {
            this.setState({
                output: 'salah'
            })
        }

    }

    render(){
        return (
            <Fragment>
                <input type="text" className="form-control" name="input-letter" onChange={this.handleChange} />
                <button onClick={this.handleSubmit}>Submit</button>
                <p>{this.state.output}</p>
            </Fragment>
        )
    }
}

export default CaseThreePage;