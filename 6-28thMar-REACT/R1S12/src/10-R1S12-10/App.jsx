const URI = "https://restcountries.com/v3.1/all";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState("");
    useEffect(() => {
        axios.get(URI).then((res) => setCountries(res.data));
    }, []);
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
        </div>
    );
}

export default App;
