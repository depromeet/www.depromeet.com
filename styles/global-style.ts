import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
    ${reset}
    html{
        font-size: 10px;
        font-family: 'Montserrat', sans-serif;
    }
    body{
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200&display=swap');
        font-family: Apple SD Gothic Neo;
        background-color: black;
    }
`;
