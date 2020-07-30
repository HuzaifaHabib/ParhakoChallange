import React from 'react';
import {BrowserRouter as Router , Switch, Route} from 'react-router-dom';
import {Cart} from './pages/cartComponent';
import {Photos} from './pages/PhotosComponent';
import ButtonAppbar from './Appbar';
import {AppContextProvider} from './AppContext'

function RouterConfig ( ) {

    return(
        <div>
            <AppContextProvider>
            <Router basename={process.env.PUBLIC_URL}>
                <ButtonAppbar />
                <Switch>
                    <Route exact path='/' component={Photos} />
                    <Route path='/cart' component={Cart} />
                </Switch>
            </Router>
            </AppContextProvider>
        </div>
    )
}

export default RouterConfig;