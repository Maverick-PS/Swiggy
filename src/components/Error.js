import { useRouteError } from "react-router-dom";
const Error = () => {
    const err = useRouteError();
    const {status, statusText} = err;
    console.log(err);
    return (
        <div>
            <h1>Ooop!!!!!!</h1>
            <h2>Something went wrong</h2>
            <h2>{status + ":" + statusText}</h2>
            {/* <h3>{err.error.message}</h3> */}
        </div>
    )
}

export default Error;