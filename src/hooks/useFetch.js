import { useEffect , useState } from "react";


const useFetch = (address) => {
    const [ans  , setAns] = useState(null)
    useEffect(()=>{
        fetch(address)
        .then(res=>{
            return res.json()
        })
        .then(body=>{
            setAns(body)
        })


    } 
    , [address])
    return ans
}
 
export default useFetch;