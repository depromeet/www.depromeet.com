import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
    ${reset}

    @font-face{
        font-family:"Gmarket Sans";
        font-weight:400;
        src: url("/fonts/GmarketSansTTFBold.ttf") format("truetype");
    }

    :focus {
        outline: none;
        border: none;
    }

    html{
        font-family: 'Spoqa Han Sans Neo', 'sans-serif'; 
        font-size: 10px;
        background-color: #000;
        overflow-x: hidden;
    }
`;
