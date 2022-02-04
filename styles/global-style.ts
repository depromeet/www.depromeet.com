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
    div[role="button"] {
        cursor: pointer;
    }
    html{
        font-size: 10px;
        font-family: Apple SD Gothic Neo, sans-serif;
        font-display: fallback;
        background-color: black;
        overflow-x: hidden;
    }
    .no-scroll-bar::-webkit-scrollbar {
        display: none;
    }
    .no-scroll-bar {
        -ms-overflow-style: none;
        scrollbar-width: none;
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
