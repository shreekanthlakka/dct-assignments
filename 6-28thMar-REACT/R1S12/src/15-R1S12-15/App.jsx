import { useEffect, useReducer } from "react";

const ACCESS_TOKEN = "pk.a6678dd10fa06387e713b1c1e6e9b0ef";
const BASE_URL = "https://us1.locationiq.com/v1";

/**
 * https://us1.locationiq.com/v1/reverse?key=Your_API_Access_Token&lat=17.372400&lon=78.437800&format=json&
 *
 */

const initialState = {
    position: {},
    isLoading: false,
    error: "",
    address: {},
};

function reducer(state, action) {
    switch (action.type) {
        case "start":
            return { ...state, isLoading: true, error: "" };
        case "error":
            return { ...state, isLoading: false, error: action.payload };
        case "setPosition":
            return { ...state, position: action.payload, error: "" };
        case "dataFetch":
            return {
                ...state,
                address: action.payload,
                error: "",
                isLoading: false,
            };
        case "default":
            return state;
    }
}

function App() {
    const [{ position, isLoading, address, error }, dispatch] = useReducer(
        reducer,
        initialState
    );

    function handleClick() {
        dispatch({ type: "start" });
        if (!navigator.geolocation) {
            dispatch({
                type: "error",
                payload: "geolocation is not supported in this browser",
            });
            return;
        }
        navigator.geolocation.getCurrentPosition(
            (pos) => {
                dispatch({
                    type: "setPosition",
                    payload: {
                        lat: pos.coords.latitude,
                        lng: pos.coords.longitude,
                    },
                });
            },
            (err) => {
                dispatch({ type: "error", payload: err.message });
            }
        );
    }

    async function getAddressData(lat, lng) {
        try {
            console.log("lat and lng", lat, lng);
            const res = await fetch(
                `${BASE_URL}/reverse?lat=${lat}&lon=${lng}&format=json&key=${ACCESS_TOKEN}`,
                {
                    method: "GET",
                    headers: { accept: "application/json" },
                }
            );
            if (!res.ok) {
                throw new Error(" data not found");
            }
            const data = await res.json();
            dispatch({ type: "dataFetch", payload: data.address });
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if (!position.lat && !position.lng) {
            return;
        }
        getAddressData(position.lat, position.lng);
    }, [position]);

    return (
        <div>
            <h2>Geo Location</h2>
            <button onClick={handleClick}>get address</button>
            {isLoading && <h2> Loading ... </h2>}
            {error && <h2>{error}</h2>}
            {!isLoading && !error && position.lat && position.lng && (
                <p>
                    Your GPS position: lat = {position.lat} lng = {position.lng}
                </p>
            )}
            {position.lat && position.lng && <Address address={address} />}
        </div>
    );
}

function Address({ address }) {
    return (
        <>
            {Object.keys(address).length > 0 ? (
                <div>
                    <h2>State : {address.state}</h2>
                    <h3>Dist : {address.state_district}</h3>
                    <h3>Pincode : {address.postcode}</h3>
                    <p>
                        Town : {address.village} , {address.county}
                    </p>
                </div>
            ) : (
                <h1>Reload the page to see an address</h1>
            )}
        </>
    );
}

export default App;
