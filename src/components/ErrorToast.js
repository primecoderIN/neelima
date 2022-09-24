import "./errorToast.css";

const ErrorToast = ({ children }) => {
    console.log("What is there in children?", children)
  return <div>{children}</div>;
};

export default ErrorToast;
