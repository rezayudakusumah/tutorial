import React, { Component } from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import Navbar from '../../component/Navbar/Navbar';
import NumberTrianglePage from '../Pages/NumberTrianglePage/NumberTrianglePage';
import PalyndromePage from '../Pages/PalyndromePage/PalyndromePage';
import StarTrianglePage from '../Pages/StarTrianglePage/StarTrianglePage';

class Home extends Component {
    render(){
        return (
            <BrowserRouter>
                <Navbar />

                <Route path="/" exact component={PalyndromePage}></Route>
                <Route path="/star" component={StarTrianglePage}></Route>
                <Route path="/number" component={NumberTrianglePage}></Route>
            </BrowserRouter>
        )
    }
}

export default Home;