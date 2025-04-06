import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout';
import Menu from './Components/Menu';
import Posts from './Components/Posts';
import Users from './Components/Users';

function App() {
    return (
        <>
            <Routes>
                <Route>
                    <Route path='/' element={<Layout />} />
                    <Route path='/menu' element={<Menu />} />
                    <Route path='/posts' element={<Posts />} />
                    <Route path='/contact' element={<Users />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
