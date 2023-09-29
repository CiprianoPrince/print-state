import { Route, Routes } from 'react-router-dom';
import { Home } from './pages';
import { ShopLayout } from './layouts';

function App() {
    return (
        <Routes>
            <Route path="/" element={<ShopLayout />}>
                <Route index element={<Home />}></Route>
            </Route>
        </Routes>
    );
}

export default App;
