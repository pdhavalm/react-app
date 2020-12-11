import React from 'react';
import web from '../images/img2.svg';
import Common from '../Common/Common';

const Home = () => {
    return (
        <>
            <Common 
                name="Grow more business with "
                imgsrc={web}
                visit="/service"
                btnname="Get started"
            />
        </>
    )
}

export default Home;