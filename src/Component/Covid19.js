import React,{useState,useEffect} from "react";

const Covid19 = ()=>{

    const [search,setSearch] = useState("")
    const [data,setData] = useState([])

    useEffect(()=>{

fetch("https://disease.sh/v3/covid-19/countries")
.then(response=>response.json())
.then(result=>{
    setData(result)
    console.log(result);
})
    },[])

    function searchCountry(){
        fetch(`https://disease.sh/v3/covid-19/countries/${search}`)
.then(response=>response.json())
.then(result=>{
    setData(result)
    console.log(result);
})
    }
    return(

        <>
        <div>

            <h1>COvid 19 case in countries</h1>

            <input onChange={(e)=>setSearch(e.target.value)} placeholder="search here"/>
            <button onClick={searchCountry} >Search</button>
        </div>
        </>
    )
}

export default Covid19