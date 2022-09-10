import { ButtonStyled } from './Button.styled'

interface Props {
    border: string
    color?: string
    children?: React.ReactNode
    height: string
    onClick: () => void
    radius: string
    width: string
}

export const Button = ({
    border,
    color,
    children,
    height,
    onClick,
    radius,
    width,
}: Props) => {
    return (
        <ButtonStyled
            onClick={onClick}
            style={{
                backgroundColor: color,
                border,
                borderRadius: radius,
                height,
                width,
            }}
        >
            {children}
        </ButtonStyled>
    )
}
