import { createContext, useReducer } from "react/";

// this will make an object theme context 
export const themeContext = createContext();
// initai state 
const initialSTate = { darkMode: false };
// then make reducer

const themeReducer = (state, action) => {
    switch (action.type) {
        case 'toggle':
            return { darkMode: !state.darkMode };
        default:
            return state;
    }
};
export const ThemeProvider = (props) => {
    const [state, dispatch] = useReducer(themeReducer, initialSTate);
    return (
        <themeContext.Provider value={{ state, dispatch }}>
            {props.children}
        </themeContext.Provider>
    )
}