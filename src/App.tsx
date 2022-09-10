import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Main } from './components/Main/Main'
import { AnimatedBox } from './components/projects/AnimatedBox'

export const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Main />} />
                <Route
                    path='/projects/animated-box'
                    element={<AnimatedBox />}
                />
            </Routes>
        </BrowserRouter>
    )
}
