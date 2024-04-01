const URI = "https://restcountries.com/v3.1";
import axios from "axios";
import { useEffect, useReducer } from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    justify-content: center;
    margin: 20px;
`;

const Table = styled.table`
    border: 2px solid black;
    font-size: medium;
    text-align: center;
    background-color: lightcyan;
`;

const initialState = {
    countries: [],
    selectedCountryCode: "",
    selectedCountry: {},
    isLoading: false,
    errors: {},
    borderCountries: [],
};

function reducer(state, action) {
    switch (action.type) {
        case "start":
            return { ...state, isLoading: true, errors: {} };
        case "dataFetched":
            return { ...state, isLoading: false, countries: action.payload };
        case "error":
            return { ...state, isLoading: false, errors: action.payload };
        case "setCountryCode":
            return {
                ...state,
                selectedCountryCode: action.payload,
            };
        case "setCountry":
            return {
                ...state,
                selectedCountry: state.countries.find(
                    (ele) => ele.cca3 === state.selectedCountryCode
                ),
            };
        case "setBorderCountryList":
            return {
                ...state,
                borderCountries: state.countries.filter((ele) =>
                    state.selectedCountry.borders?.includes(ele.cca3)
                ),
            };
        case "default":
            return state;
    }
}

function AppuseReducer() {
    const [
        { countries, selectedCountryCode, selectedCountry, borderCountries },
        dispatch,
    ] = useReducer(reducer, initialState);

    useEffect(() => {
        dispatch({ type: "start" });
        axios
            .get(`${URI}/all`)
            .then((res) => dispatch({ type: "dataFetched", payload: res.data }))
            .catch((err) =>
                dispatch({
                    type: "error",
                    payload: {
                        errorMessage: "Error Fetching Data",
                        err,
                        status: err.responce?.status,
                    },
                    // status: err.responce?.status || 404,
                })
            );
    }, []);

    useEffect(() => {
        if (!selectedCountryCode) return;
        dispatch({ type: "setCountry" });
        if (selectedCountry.borders?.length > 0) {
            dispatch({ type: "setBorderCountryList" });
        }
    }, [selectedCountryCode, selectedCountry]);

    return (
        <div>
            <h2>Countries App</h2>
            <select
                value={selectedCountryCode}
                onChange={(e) =>
                    dispatch({
                        type: "setCountryCode",
                        payload: e.target.value,
                    })
                }
            >
                <option value="">Select Country</option>
                {countries.map((ele) => (
                    <option key={ele.cca3} value={ele.cca3}>
                        {" "}
                        {ele.name?.common}{" "}
                    </option>
                ))}
            </select>
            {selectedCountryCode && (
                <CountryDetails
                    borderCountries={borderCountries}
                    selectedCountry={selectedCountry}
                />
            )}
        </div>
    );
}

function CountryDetails({ borderCountries, selectedCountry }) {
    if (borderCountries.length === 0) {
        return (
            <p>
                Selecetd country -{" "}
                <strong>{selectedCountry.name?.common}</strong> has no borders{" "}
            </p>
        );
    }
    return (
        <Container>
            <Table>
                <thead>
                    <tr>
                        <th>flag symbol</th>
                        <th>country name</th>
                        <th>capital</th>
                        <th>currency</th>
                    </tr>
                </thead>
                <tbody>
                    {borderCountries.map((country) => (
                        <tr key={country.cca3}>
                            <td>
                                <img
                                    src={country.flags.png}
                                    alt={country.name.common}
                                    width="50px"
                                />
                            </td>
                            <td>{country.name.common}</td>
                            <td>{country.capital[0]}</td>
                            <td>
                                {
                                    country.currencies[
                                        Object.keys(country.currencies).join()
                                    ]?.name
                                }
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
}

export default AppuseReducer;
