import styled from 'styled-components'

export const ButtonStyled = styled.button`
    width: 100%;
    height: 100%;
    cursor: pointer;
    box-shadow: 0 0.1rem 0.1rem rgba(0, 0, 0, 1);
    font-size: 1.3rem;
    transition: all 0.2s ease-in-out;
    background-color: #454441;
    color: #ff2b83;

    padding: 0.2rem 0.2rem;
    &:hover {
        transform: scale(1.03);
        background-color: #ff2b83;
        color: #fff;
    }
`
