import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
    ${reset}
    :focus {
        outline: none;
        border: none;
    }
    div[role="button"] {
        cursor: pointer;
    }
    html{
        font-size: 10px;
        font-family: Apple SD Gothic Neo;
        background-color: black;
        overflow-x: hidden;
    }
`;
