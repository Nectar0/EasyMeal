import React from 'react';
import Header from './header/Header';
import Body from './body/Body';
import Footer from "./footer/GetStartedFooter"

const Landing: React.FC<{}> = () => {
    return <div className={"overflow-x-hidden"}>
        <Header />
        <Body />
        <Footer />
    </div>;
};

export default Landing;