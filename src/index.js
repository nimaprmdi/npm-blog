import React from "react";
import "./assets/css/fonts.css";
import "./assets/css/styles.css";
import ReactDOM from "react-dom/client";
import App from "./App";
import theme from "./mui/theme";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

const client = new ApolloClient({
    uri: process.env.REACT_APP_GRAPHCMS_URI,
    cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <React.StrictMode>
            <ApolloProvider client={client}>
                <ThemeProvider theme={theme}>
                    <App />
                </ThemeProvider>
            </ApolloProvider>
        </React.StrictMode>
    </BrowserRouter>
);
