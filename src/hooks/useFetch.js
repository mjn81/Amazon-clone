import { useEffect , useState } from "react";
import axios from "axios";

const useFetch = (address) => {
    const [res , setRes] = useState(null);
    useEffect(()=>{
        axios.get(address)
        .then(
            result => {
                setRes(result.data);
            }
        )


    } 
    , [address])
    return res;
}
 
export default useFetch;