const URI = "https://restcountries.com/v3.1";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState("");
    const [borderCountries, setBorderCountries] = useState([]);

    useEffect(() => {
        axios.get(`${URI}/all`).then((res) => setCountries(res.data));
    }, []);
    // const borders = countries.filter(
    //     (country) => country.cca3 === selectedCountry
    // )[0]?.borders;

    useEffect(() => {
        if (!selectedCountry) return;
        const country = countries.find((ele) => ele.cca3 === selectedCountry);
        if (country.borders) {
            // setBorderCountries(() =>
            //     countries.filter((ele) => country.borders.includes(ele.cca3))
            // );
            axios
                .get(`${URI}/alpha?codes=${country.borders.join()}`)
                .then((res) => setBorderCountries(res.data))
                .catch((err) => console.log(err));
        }
    }, [selectedCountry, countries]);

    return (
        <div>
            <select
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
            >
                <option value="">Select a country</option>
                {countries.map((ele) => (
                    <option key={ele.cca3} value={ele.cca3}>
                        {ele.name?.common} -{ele.name?.official}
                    </option>
                ))}
            </select>
            {selectedCountry && <Table borderCountries={borderCountries} />}
        </div>
    );
}

function Table({ borderCountries }) {
    if (borderCountries.length === 0) {
        return <h2>Selected country has no borders</h2>;
    }
    return (
        <table>
            <thead>
                <tr>
                    <th>Flag Symbol</th>
                    <th>Country Name</th>
                    <th>Capital</th>
                </tr>
            </thead>
            <tbody>
                {borderCountries.map((ele) => (
                    <tr key={ele.cca3}>
                        <td>
                            <img src={ele.flags.png} width="50px" />
                        </td>
                        <td>{ele.name.common}</td>
                        <td>{ele.capital[0]}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default App;
