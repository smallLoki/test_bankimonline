import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { i18n } from "@lingui/core";
import { I18nProvider } from "@lingui/react";

import ru from './local/ru.json';

import './App.css';
import Catalog from './containers/Catalog/Catalog';
import Layout from "./hoc/Layout/Layout";
import HomeLoan from "./containers/HomeLoan/HomeLoan";

i18n.load("ru", ru);
i18n.activate("ru");

const App = () => {
    return (
        <I18nProvider i18n={i18n}>
          <Layout>
            <Routes>
              <Route path="/" element={<HomeLoan/>} />
              <Route path="/masseurs" element={<Catalog/>} />
            </Routes>
          </Layout>
        </I18nProvider>
    )
}

export default App;
