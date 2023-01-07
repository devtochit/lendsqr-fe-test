import '../../saas/Button/button.scss';



interface Props {
    children: any,
    background?: string,
    color?: string,
    text_transform?: string
    padding?: string,
    type?: "button" | "submit" | "reset";
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({ children, onClick, background, color, type, padding, text_transform }: Props) => {
  return (
    <button onClick={onClick} 
    type={type} 
    className={`btn-styles ${background} ${color} ${padding} ${text_transform}`}>
        { children }
    </button>
  )
}

export default Button