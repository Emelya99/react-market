import React from 'react';
import Banner from './SectionBanner';
import Work from './SectionWork';
import InstagramContainer from './SectionInstagram/InstagramContainer';
import Geography from './SectionGeography';

function Content() {
    return (
        <React.Fragment>
            <Banner />
            <Work />
            <InstagramContainer />
            <Geography />
        </React.Fragment>
    );
}

export default Content;