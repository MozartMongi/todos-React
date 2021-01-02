import React, {Component, Fragment} from 'react'
import Login from './component/login'
import { BrowserRouter, Route } from 'react-router-dom'
import Register from './component/register'
import Mainpage from './component/mainpage'


class Home extends Component {
    render() {
        return (
            <BrowserRouter>
                <Fragment>
                    <Route path="/" exact component={Login} />
                    <Route path="/register" component={Register} />
                    <Route path="/mainpage" component={Mainpage} />
                </Fragment>
            </BrowserRouter>
        )
    }
}
export default Home
