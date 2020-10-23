import React, { Suspense } from 'react';
import { Route, Switch } from "react-router-dom";
import NavBar from './Components/Navigation/Navbar';
import Landing from './Components/Landing/Landing';
import ModelDetails from './Components/Models/ModelDetails'

function App() {
    return (
        <Suspense fallback={(<div>Loading...</div>)} >
            <NavBar />
            <Switch>
                <Route exact path="/" component={Landing}></Route>
                <Route exact path="/model/:id" component={ModelDetails}></Route>
            </Switch>
        </Suspense>
    )
}

export default App
