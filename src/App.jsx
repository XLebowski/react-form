import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout';
import Posts from './Components/Posts/Posts';
import Clients from './Components/Clients/Clients';
import Search from './Components/Search/Search';
import { BASE_PATH, CLIENTS, POSTS, SEARCH } from './constants/path';
import Main from './Components/Main/Main';

export default function App() {
    return (
        <>
            <Routes>
                <Route path={BASE_PATH} element={<Layout />}>
                    <Route index element={<Main />} />
                    <Route path={POSTS} element={<Posts />} />
                    <Route path={CLIENTS} element={<Clients />} />
                    <Route path={SEARCH} element={<Search />} />
                </Route>
            </Routes>
        </>
    );
}

// export default App;
