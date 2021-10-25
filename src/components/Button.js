import React from "react";
import styled from "styled-components";

const ButtonContainer = styled.TouchableOpacity`
    background-color: #9b59b6;
    margin: 10px 0px;
    padding: 15px 40px;
    border-radius: 15px;
    justify-content: center;
`;

const Title = styled.Text`
    font-size: 20px;
    font-weight: 600;
    color: #fff
`;

const Button = props => {
    return (
        <ButtonContainer>
            <Title>{props.title}</Title>
        </ButtonContainer>
    )
}

export default Button;