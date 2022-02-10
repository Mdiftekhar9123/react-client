import React from "react";
import enTranslations from '@shopify/polaris/locales/en.json';
import { AppProvider } from '@shopify/polaris';
// import Router from "./route/Routes";
import TextFieldDemo from "./pages";

const App = () => {
    
    return (
        <div>
            <AppProvider i18n={enTranslations}>
                {/*<Router />*/}
            <TextFieldDemo/>
            </AppProvider>
        </div>
    );
}
export default App;
