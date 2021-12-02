import {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'



function CountriesList() {

    const [countries, setCountries] = useState([])

    useEffect(() => {

        async function getData() {
        let response = await axios.get ('https://restcountries.com/v3.1/all')
        setCountries(response.data)
       
        }
        getData()

    }, [])

    return (
        <div>
           <h1>All Countries</h1>
            {
            countries.map((elem, i) => {
                return (
                    <div key= {i}>
                        <p><Link to= {`/countries/${elem.cca3}`}>{elem.name.common}</Link></p>
                    </div>
                )
            })
            }
        </div>
    )
}
export default CountriesList