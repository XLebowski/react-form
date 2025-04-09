import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout';
import Menu from './Components/Menu';
import Posts from './Components/Posts';
import Users from './Components/Users';
import Search from './Components/Search';
// import Header from './Components/Header';

export default function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Layout />}>
                    {/* <Route index element={<Menu />} /> */}
                    <Route path='/posts' element={<Posts />} />
                    <Route path='/users' element={<Users />} />
                    <Route path='/search' element={<Search />} />
                </Route>
            </Routes>
        </>
    );
}

// export default App;
