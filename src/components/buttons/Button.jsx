import styled from "styled-components";
import  Styled from "styled-components";

export const Button = styled.button`
    max-width: auto;
    text-decoration: none;
    border: none;
    text-transform: uppercase;
    color: rgb(255,255,255);
    background-color: rgb(98,84,243);
    padding: 1.4rem 2.4rem;
    text-align: center;
    cursor: pointer;
    transition: all 0.3s ease;
    -webkit-transition: all 0.3s ease 0s;
    -moz-transition: all 0.3s ease 0s;
    -o-transition: all 0.3s ease 0s;

    &:hover,
    &:active{
        box-shadow: 0 2rem 2rem 0 rgb(132 144 155 / 30%);
        box-shadow: ${({theme})=>theme.colors.shadowSupport};
        transform: scale(0.96);
    }
    a{
        text-decoration: none;
        color:rgb(255,255,255);
        font-size:1.8rem;
    }
`;