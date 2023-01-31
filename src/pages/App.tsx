/* eslint-disable no-unused-vars */
import React from 'react';
import { Home } from './Home'
import { StatusBar } from 'react-native';
export default function App() {
    return (
        <>
            <StatusBar barStyle={"light-content"} />
            <Home />
        </>
    )
}
