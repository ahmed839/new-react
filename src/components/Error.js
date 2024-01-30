import { useRouteError } from "react-router-dom";

const Error =()=>{
  const error = useRouteError();
  console.error(error);
    return(
       <div>
         <h1>Opps Someting Went Wrong {error.status}</h1>
        <h1>Page {error.statusText}</h1>
       </div>
    )
}
export default Error;