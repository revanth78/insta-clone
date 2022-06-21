import React from "react";
import Heading from './components/Heading';
import Post from './components/Post';
import posts from './posts'
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;
    flex-wrap: wrap;
    margin-left: 10px;

`

function createPost(post){
    return <Post picture = {post.display_src}
    caption = {post.caption}
    />
}


function App(){
    return(
        <div>
            <Heading />
            <Container >
                {posts.map(createPost)}
            </Container>
            
        </div>
    )
}

export default App;