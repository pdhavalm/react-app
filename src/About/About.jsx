import React from 'react';
import web from '../images/img2.svg';
import Common from '../Common/Common';

const About = () => {
    return (
        <>
            <Common 
                name="Welcome to about page"
                imgsrc={web}
                visit="/contact"
                btnname="Contact now" 
            />
        </>
    )
}

export default About;