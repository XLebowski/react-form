import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout';
import Posts from './Components/Posts/Posts';
import Clients from './Components/Clients/Clients';
import Search from './Components/Search/Search';

export default function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Layout />}>
                    {/* <Route index element={<Menu />} /> */}
                    <Route path='/posts' element={<Posts />} />
                    <Route path='/users' element={<Clients />} />
                    <Route path='/search' element={<Search />} />
                </Route>
            </Routes>
        </>
    );
}

// export default App;
