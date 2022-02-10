import React from "react";
import enTranslations from '@shopify/polaris/locales/en.json';
import { AppProvider } from '@shopify/polaris';
import Router from "./route/Routes";


const App = () => {
    
    return (
        <div>
            <AppProvider i18n={enTranslations}>
                <Router />
            </AppProvider>
        </div>
    );
}
export default App;
