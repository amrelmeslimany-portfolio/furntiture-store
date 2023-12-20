import CustomRouter from "./CustomRouter";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { useEffect } from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import Toast from "./components/common/Messages/Toast";

function App() {
    useEffect(() => {
        document.body.classList.add("max-md:pb-14");
    }, []);
    return (
        <Provider store={store}>
            <HelmetProvider>
                <BrowserRouter>
                    <CustomRouter />
                    <Toast />
                </BrowserRouter>
            </HelmetProvider>
        </Provider>
    );
}

export default App;
