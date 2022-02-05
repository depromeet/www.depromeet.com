import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';
import { media } from './theme';

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
    div[role="button"], button {
        cursor: pointer;
    }

    html{
        font-family: 'Spoqa Han Sans Neo', 'sans-serif'; 
        font-size: 10px;
        background-color: #000;
        overflow-x: hidden;
    }
    
    .no-scroll-bar::-webkit-scrollbar {
        display: none;
    }

    .no-scroll-bar {
        -ms-overflow-style: none;
        scrollbar-width: none;
        position:relative;
    }

    .mobile__only {
        display: none;
        ${media.mobile} {
            display: block;
        }
    }

    .mobile__none {
        ${media.mobile} {
            display: none;
        }
    }
`;
