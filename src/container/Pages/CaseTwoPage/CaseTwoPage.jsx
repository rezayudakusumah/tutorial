import React, { Component, Fragment } from 'react';

class CaseTwoPage extends Component {

    state = {
        rudy: [],
        ani: []
    }

    handleChange = (event) => {
        let inputNew = event.target.value;
        console.log(event.target)
        // this.setState({
        //     input: inputNew
        // })
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
                <h2>Rudy</h2>
                <label>Sejarah :</label>
                <input type="text" className="form-control" name="input[1]" onChange={this.handleChange} />
                <label>Matematika :</label>
                <input type="text" className="form-control" name="input[2]" onChange={this.handleChange} />
                <label>Sosiologi :</label>
                <input type="text" className="form-control" name="input[3]" onChange={this.handleChange} />
                <label>Kewarganegaraan :</label>
                <input type="text" className="form-control" name="input[4]" onChange={this.handleChange} />
                {/* <h2>Ani</h2>
                <label>Sejarah :</label>
                <input type="text" className="form-control" name="input-letter" onChange={this.handleChange} />
                <label>Matematika :</label>
                <input type="text" className="form-control" name="input-letter" onChange={this.handleChange} />
                <label>Sosiologi :</label>
                <input type="text" className="form-control" name="input-letter" onChange={this.handleChange} />
                <label>Kewarganegaraan :</label>
                <input type="text" className="form-control" name="input-letter" onChange={this.handleChange} /> */}
                <button onClick={this.handleSubmit}>Submit</button>
                <p>{this.state.output}</p>
            </Fragment>
        )
    }
}

export default CaseTwoPage;