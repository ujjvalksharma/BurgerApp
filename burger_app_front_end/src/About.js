import React from 'react';
import Title from './Title';
import Paragraph from './Paragraph';
function About(){
    return (
        <div>
            <br />
            <center>
<Title>
    What to know about us?
</Title>
</center>
<br />
<Paragraph>
This is a burger booking application. A user must register with the application to build his burger. The burger can be added to cart. The front-end is built using ReactJs and Bootstrap and backend is build using Springboot.
</Paragraph>
        </div>
    );
}

export default About;