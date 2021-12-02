import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'

function CountryDetails(){
     const {alpha3Code} = useParams()
     const [detail, setDetail] = useState(null)
   
     useEffect (() => {
         async function getData() {
             let { data } = await axios.get(`https://restcountries.com/v3.1/alpha/${alpha3Code}`)
             
             console.log(data[0])
             let country = { 
                 alpha3Code: alpha3Code,
                 name: data[0].name.common,
                 capital: data[0].capital,
                 area: data[0].area,
                 borders: data[0].borders,
                 flags: data[0].flags.svg 
            
             }
             setDetail(country)
         }
         getData()
        
     }, [alpha3Code])

     if (!detail) {
        return <p>Loading . . . </p>
    }
     
     return (
        <div> 
            
        <h1>Country Details</h1>
        <p>Name of the country - {detail.name}</p>
        <p>Capital city - {detail.capital}</p>
        <p>Area - {detail.area}</p>
        <p>Borders - {detail.borders}</p>

    </div>
     )
	
}

export default CountryDetails