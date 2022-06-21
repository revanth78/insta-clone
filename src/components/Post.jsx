import React from 'react';
import styled from 'styled-components';
import { FavoriteOutlined, Message } from '@material-ui/icons';
import { useState } from 'react';
// import posts from '../posts';


 const Container = styled.div`
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        flex-wrap: wrap;
        margin-left: 10px;
 `
 const Wrapper = styled.div`
        border-style: groove;
        border-width: 0.5;
        border-color: #EFEFEF;
        margin-bottom: 25px;
        
 `
 const Image = styled.img`
        width: 100wh;
 `
const Desc = styled.p`
    margin-top: 25px;
    margin-left: 20px;
    margin-bottom: 30px;
`


 const Button = styled.button`
    margin:20px;
    cursor: pointer;
    width: 100px;
    align-items: center;
    :hover {
      background-color:#002ead;
      transition: 0.7s;
    
  }
 `

 

function Post(props) {

       const [count , setCount] = useState(56);

       function toIncrease(){
       return(
        setCount(count + 1)
       )
 }


  return (
        <Container>
            <Wrapper>
                <Image src={props.picture} />
                <Desc>{props.caption}</Desc>
                <Button onClick={toIncrease}>
                <FavoriteOutlined />   {count}
                </Button>
                <Button>
                <Message /> 4
                </Button>
                
            </Wrapper>
            
        </Container>
  )
}

export default Post;