interface Props {
  children: string;
  color?: // question markk is added so it is not required when creating component in app. Default value 'primary' is used if not specified.
  "primary" | "secondary" | "danger" | "warning" | "success" | "dark" | "light";
  onClick: () => void;
}

const Button = ({ children, onClick, color = "primary" }: Props) => {
  return (
    <button className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
