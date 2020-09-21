import React, { Component, Fragment } from 'react';
// import Form from '../../../component/Form/Form';

class PalyndromePage extends Component {

    state = {
        valuePalyndrome: '',
        resultPalyndrome: ''
    }

    handleFormChange = (event) => {
        // console.log('form change', event.target.value);
        let valueNew = event.target.value

        this.setState({
            valuePalyndrome: valueNew
        }, () => {
            console.log('value new: ', this.state.valuePalyndrome)
        })        
    }

    handleSubmit = () => {
        let resultSplit = this.state.valuePalyndrome.split("");
        let resultReverse = resultSplit.reverse();
        let resultJoin = resultReverse.join("");
        let resultSubStr = resultJoin.substr(1);

        let finalResult = this.state.valuePalyndrome + resultSubStr;
        console.log(finalResult);

        this.setState({
            resultPalyndrome: finalResult
        })
    }

    render(){
        return (
            <Fragment>
                <div className="card">
                    <div className="form-group">
                        <label>Input</label>
                        <input type="text" className="form-control" name="input-letter" onChange={this.handleFormChange} />
                    </div>
                    <button className="btn btn-success" onClick={this.handleSubmit}>Submit</button>
                </div>

                <div className="card">
                    <div className="card-body">{this.state.resultPalyndrome}</div>
                </div>
            </Fragment>
        )
    }
}

export default PalyndromePage;