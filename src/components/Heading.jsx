import React from 'react';
import styled from 'styled-components';


    const Container = styled.div`
        /* font-size: 200px;
        text-align: center; */

    
    `;

    const HeadingImg = styled.img`
        width: 400px;
        height: 140px;
        margin-left: auto;
        margin-right: auto;
        display: block;
        margin-top: 30px;
        margin-bottom: 30px;
    
    `;

function Heading(){
    return(

            <Container>
                <HeadingImg src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/840px-Instagram_logo.svg.png" />
            </Container>

    )
}

export default Heading;