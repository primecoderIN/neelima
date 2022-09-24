import ErrorToast from "../components/ErrorToast";


const BlaBla = () => <h1>I will be used in services page</h1>

const Services = () => {
  return <ErrorToast>
    <BlaBla />
  </ErrorToast>;
};

export default Services;
