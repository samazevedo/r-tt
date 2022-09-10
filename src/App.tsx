import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Main } from './components/Main/Main'

export const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Main />} />
            </Routes>
        </BrowserRouter>
    )
}
