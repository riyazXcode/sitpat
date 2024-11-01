import {createRoot} from "react-dom/client";
import App from "./App"
import {store} from "./app/store";
import {Provider} from "react-redux";
import React from "react";

const container = document.getElementById("root");
const root = createRoot(container)
root.render(<React.StrictMode>
    <Provider store={store}>
            <App/>
    </Provider>
</React.StrictMode>);