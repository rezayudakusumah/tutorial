import React, { Component, Fragment } from 'react';

class CaseOnePage extends Component {

    state = {
        input: '', 
        output: ''
    }

    handleChange = (event) => {
        // console.log(event.target.value);
        let inputNew = event.target.value;
        // console.log(this.state.input)
        this.setState({
            input: inputNew
        })
    }

    handleSubmit = () => {

        let vowel = ['a', 'u', 'e', 'o'];
        let outputNew = this.state.input;
        
        let outputFinal = outputNew.replace('a', 'i');

        this.setState({
            output: outputFinal
        })
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

export default CaseOnePage;