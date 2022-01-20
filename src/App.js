import React from "react";
import enTranslations from '@shopify/polaris/locales/en.json';
import {AppProvider} from '@shopify/polaris';
import Routess from "./route/Routes";
const App = () => {
    return(
        <div>
        <AppProvider i18n={enTranslations}>
            <Routess/>
        </AppProvider>
        </div>
    );
}
export default App;
