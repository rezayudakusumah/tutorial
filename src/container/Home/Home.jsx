import React, { Component } from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import Navbar from '../../component/Navbar/Navbar';
import CaseOnePage from '../Pages/CaseOnePage/CaseOnePage';
import CaseThreePage from '../Pages/CaseThreePage/CaseThreePage';
import CaseTwoPage from '../Pages/CaseTwoPage/CaseTwoPage';
import CaseFivePage from '../Pages/CaseFivePage/CaseFivePage';
import CaseFourPage from '../Pages/CaseFourPage/CaseFourPage';

class Home extends Component {
    render(){
        return (
            <BrowserRouter>
                <Navbar />

                <Route path="/" exact component={CaseOnePage}></Route>
                <Route path="/casetwo" component={CaseTwoPage}></Route>
                <Route path="/casethree" component={CaseThreePage}></Route>
                <Route path="/caseFour" component={CaseFourPage}></Route>
                <Route path="/casefive" component={CaseFivePage}></Route>
            </BrowserRouter>
        )
    }
}

export default Home;