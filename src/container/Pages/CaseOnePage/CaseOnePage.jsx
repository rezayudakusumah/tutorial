import React, { Component, Fragment } from 'react';

class CaseOnePage extends Component {

    state = {
        input: '', 
        output: ''
    }

    handleChange = (event) => {
        let inputNew = event.target.value;
        
        this.setState({
            input: inputNew
        })
    }

    handleSubmit = () => {

        let vowel = ['a', 'u', 'e', 'o'];
        let outputNew = this.state.input;
        let outputFinal = [];

        for(let i = 0; i < vowel.length; i++) {
            outputFinal = outputNew.replaceAll(vowel[i], 'i');
            outputNew = outputFinal;
        }
        
        // console.log(outputNew);

        this.setState({
            output: outputNew
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