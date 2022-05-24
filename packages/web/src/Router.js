import{ Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';

export default function Router() {
    return (
        <Routes>
            <Route exact path='/' element = {<Home />} />
            <Route exact path="" element = {<Home />} />
            <Route exact path='/sign-in' element = {<SignIn />} />
        </Routes>
    )
    
    
}