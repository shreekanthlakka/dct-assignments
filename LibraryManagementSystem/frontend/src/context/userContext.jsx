import { createContext, useReducer } from "react";

const initialState = {
    user: {},
    isLoading: false,
    errors: {},
};

const userContext = createContext();

function userReducer(state, action) {
    switch (action.type) {
        case "default":
            return state;
    }
}

function UserContextProvider({ children }) {
    const [{ user, isLoading }, display] = useReducer(
        userReducer,
        initialState
    );

    const login = async (email, password) => {
        try {
        } catch (error) {}
    };

    const value = {
        user,
        isLoading,
    };
    return (
        <userContext.Provider value={value}>{children}</userContext.Provider>
    );
}

export { UserContextProvider };
