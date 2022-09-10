import { MainStyled } from './Main.styled'
import { projects } from '../../data/projectsdata'
import { useNavigate } from 'react-router-dom'
import { Button } from '../Button/Button'
export const Main = () => {
    const navigate = useNavigate()
    return (
        <MainStyled>
            <h1>Projects</h1>
            <ul>
                {projects.map((project) => {
                    const { id, name, description, url } = project
                    return (
                        <li key={id}>
                            <h2>{name}</h2>
                            <p>{description}</p>
                            <Button
                                onClick={() => {
                                    navigate(`projects/${url}`)
                                }}
                                border='none'
                                height='3rem'
                                radius='0.2rem'
                                width='9rem'
                            >
                                View Project
                            </Button>
                        </li>
                    )
                })}
            </ul>
        </MainStyled>
    )
}
