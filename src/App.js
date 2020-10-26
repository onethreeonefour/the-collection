import React, { Suspense } from 'react';
import { AnimatePresence } from 'framer-motion'
import { Route, Switch, useLocation } from "react-router-dom";
import NavBar from './Components/Navigation/Navbar';
import Landing from './Components/Landing/Landing';
import ModelDetails from './Components/Models/ModelDetails';
import Footer from './Components/Navigation/Footer';

function App() {
    const location = useLocation();
    return (
        <Suspense fallback={(<div>Loading...</div>)} >
            <NavBar />
            <AnimatePresence exitBeforeEnter >
                <Switch location={location} key={location.pathname}>
                    <Route exact path="/" component={Landing}></Route>
                    <Route exact path="/model/:id" component={ModelDetails}></Route>
                </Switch>
            </AnimatePresence>
            <Footer />
        </Suspense>
    )
}

export default App
