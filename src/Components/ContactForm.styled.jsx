import styled from "styled-components";


export const FormLabel = styled.label` 
display: block;
margin-bottom: 10px;
margin-top: 15px;

`

export const Error = styled.div` 
position: absolute;
z-index: 99;
max-width: 435px;
border: 1px solid blue;
border-radius: 0 10px 10px 10px;
padding: 5px;
background-color: cornflowerblue;
`

export const Icon = styled.div` 
display: inline-block;
position: absolute;
z-index: 1;
margin-left: 10px;
svg {
    width: 20px;
    height: 20px;
}
`
export const ButtonSubmit = styled.button` 
display: block;
padding: 10px 20px;
margin: 30px auto 0 auto;
text-transform: uppercase;
outline: none;
border-radius: 10px;
border: 1px solid blue;
background-color: cornflowerblue;
`