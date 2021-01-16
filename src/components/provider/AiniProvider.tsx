import React from "react";
import { JssProvider, SheetsRegistry, ThemeProvider } from "react-jss";
import { IAiniTheme } from "../../IAiniTheme";

interface IAiniContextValue {
    theme?: IAiniTheme;
}

export const AiniContext = React.createContext<IAiniContextValue>({});

interface IAiniProviderProps {
    children: JSX.Element | JSX.Element[] | string | number;
    theme: IAiniTheme;
}

export const AiniProvider = (props: IAiniProviderProps) => {
    const sheets = new SheetsRegistry();
    return (
        <AiniContext.Provider value={{ theme: props.theme }}>
            <JssProvider registry={sheets} classNamePrefix="Aini">
                <ThemeProvider theme={props.theme}>
                    {props.children}
                </ThemeProvider>
            </JssProvider>
        </AiniContext.Provider>
    );
};
