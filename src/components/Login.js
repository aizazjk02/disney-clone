import React from 'react'
import styled from 'styled-components';
 
const Login = (props) => {
    return (
        <Container>
            <Content>Content</Content>
        </Container>
    )
}

// This is our main container 
const Container = styled.section`
    overflow:hidden;
    display:flex;
    flex-direction:column;
    text-align:center;
    height:100vh;

`
// This is our main content 
const Content = styled.div`
    margin-bottom:10vw;
    width:100%;
    position:relative;
    min-height:100vh;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    padding:80px 40px;
    height:100%;
`
export default Login;
