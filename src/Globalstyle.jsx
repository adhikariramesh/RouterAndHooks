import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Work Sans', sans-serif;
}
html{
    font-size: 62.5%;
    overflow-x: hidden;
}
h1{
    font-size: 6rem;
    font-weight: 900;
    color: ${({theme})=>theme.colors.heading};
}
h2{
    color: ${({theme})=>theme.colors.heading};
    font-size:4.4rem;
    font-weight: 300;
    white-space: normal;
    text-align: center;
}
h3{
    font-size: 1.8rem;
    font-weight: 400;
}
p{
    color: ${({theme})=>theme.colors.text};
    opacity: .7;
    font-size: 1.65rem;
    line-height: 1.5;
    font-weight: 400;
    margin-top: 1rem;
}
a{
    text-decoration: none;
}
li{
    list-style: none;
}

.container{
    max-width: 120rem;
    margin: 0 auto;

}
.grid{
    display: grid;
    gap: 9rem;
}
.grid-two-column{
    grid-template-columns: repeat(2, 1fr);
}
.grid-tree-colulmn{
    grid-template-columns: repeat(3, 1fr);
}

.grid-four-column{
    grid-template-columns: 1fr 1fr 1fr 1fr;
}
@media (max-width:990px){
    .grid-four-column{
        grid-template-columns: repeat(2, 1fr);
}
.grid-two-column{
    grid-template-columns: repeat(1, 1fr);
}
}
@media (max-width:600px){
    .grid-four-column{
        grid-template-columns: repeat(1, 1fr);
}
.grid-two-column{
    grid-template-columns: repeat(1, 1fr);
}
}
`;