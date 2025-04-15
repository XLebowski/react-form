import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout';
import Posts from './Components/Posts/Posts';
import Clients from './Components/Clients/Clients';
import Search from './Components/Search/Search';
import { BASE_PATH, CLIENTS, POSTS, SEARCH } from './constants/path';

export default function App() {
    return (
        <>
            <Routes>
                <Route path={BASE_PATH} element={<Layout />}>
                    {/* <Route index element={<Menu />} /> */}
                    <Route path={POSTS} element={<Posts />} />
                    <Route path={CLIENTS} element={<Clients />} />
                    <Route path={SEARCH} element={<Search />} />
                </Route>
            </Routes>
        </>
    );
}

// export default App;
