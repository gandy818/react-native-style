import React from 'react';
import styled from 'styled-components';
import Button from './components/Button'
// import { View } from 'react-native';
// import {viewStyles} from './styles'
// import {Header, Contents, Footer} from './components/Layout'
// import ShadowBox from './components/ShadowBox'

const Container = styled.View`
    flex : 1;
    align-items: center;
    justify-content: center;
`;

const App = ()=> {
    return (
        <Container>
            <Button title="test1"></Button>
            <Button title="test2"></Button>
        </Container>
    )
}

export default App;
