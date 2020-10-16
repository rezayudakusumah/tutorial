import React, { Component, Fragment } from 'react';

class CaseTwoPage extends Component {

    state = {
        rudy: [8, 7, 6, 9],
        ani: [5, 8, 9, 6],
        rudyPoint: '',
        aniPoint: ''
    }

    handleChange = (event) => {
        let inputNew = event.target.value;
        console.log(event.target)
        // this.setState({
        //     input: inputNew
        // })
    }

    handleSubmit = () => {

        let rudyScore = 0;
        let aniScore = 0;

        for(let i = 0; i < this.state.rudy.length; i++){
            if(this.state.rudy[i] > this.state.ani[i]){
                rudyScore = rudyScore + 1
            }
            else{
                aniScore = aniScore + 1
            }
        }

        // console.log(rudyScore);
        // console.log(aniScore);

        this.setState({
            rudyPoint: rudyScore,
            aniPoint: aniScore
        })
    }

    render(){
        return (
            <Fragment>
                <p>Data Nilai Rudy: {this.state.rudy}</p>
                <p>Data Nilai Ani:{this.state.ani}</p>
                <button onClick={this.handleSubmit}>Submit</button>
                <p>Rudy Point: {this.state.rudyPoint}</p>
                <p>Ani Point: {this.state.aniPoint}</p>
            </Fragment>
        )
    }
}

export default CaseTwoPage;