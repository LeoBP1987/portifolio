import { createGlobalStyle } from "styled-components";

const EstilosGlobais = createGlobalStyle`
    @font-face {
        font-family: 'ExoSpace';
        src: url('/src/assets/fonts/ExoSpace.ttf') format('truetype');
        font-weight: normal;
        font-style: normal;
    }

    :root {

        --cor-primaria: #000D26;
        --cor-secundaria: #D35400;
        --cor-terciaria: #EEE8AA;
        --cor-quarternaria: #FAEBD7;
        
        --cor-detalhe: #D76B30;
        --cor-detalhe-secundaria: #333;
        
        --cor-fonte-primaria: #EEE8AA;
        --cor-fonte-secundaria: #000D26;
        --cor-fonte-terciaria: #333;

        --fonte-secundaria: "source-sans-pro", sans-serif;
        --fonte-terciaria: 'ExoSpace', sans-serif;
    }
    html {
    line-height: 1.15; 
    -webkit-text-size-adjust: 100%; 
    font-family: Arial, Helvetica, sans-serif;
    font-size: 20px;
    color: var(--cor-fonte-primaria);
    margin: 0;
    padding: 0;
    }
    body {
    margin: 0;
    padding: 0;
    min-height: 100vh;
    max-width: 100vw;
    }
    main {
    display: block;
    }
    h1 {
    font-size: 2em;
    margin: 0.67em 0;
    }
    hr {
    box-sizing: content-box; 
    height: 0; 
    overflow: visible; 
    }
    a {
    background-color: transparent;
    }
    abbr[title] {
    border-bottom: none; 
    text-decoration: underline; 
    text-decoration: underline dotted; 
    }
    b,
    strong {
    font-weight: bolder;
    }
    code,
    kbd,
    samp {
    font-family: monospace, monospace; 
    font-size: 1em; 
    }
    small {
    font-size: 80%;
    }
    sub,
    sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
    }
    sub {
    bottom: -0.25em;
    }
    sup {
    top: -0.5em;
    }
    img {
    border-style: none;
    }
    button,
    input,
    optgroup,
    select,
    textarea {
    font-family: inherit; 
    font-size: 100%; 
    line-height: 1.15; 
    margin: 0; 
    }
    button,
    input { 
    overflow: visible;
    }
    button,
    select { 
    text-transform: none;
    }
    button,
    [type="button"],
    [type="reset"],
    [type="submit"]
    button::-moz-focus-inner,
    [type="button"]::-moz-focus-inner,
    [type="reset"]::-moz-focus-inner,
    [type="submit"]::-moz-focus-inner {
    border-style: none;
    padding: 0;
    }
    button:-moz-focusring,
    [type="button"]:-moz-focusring,
    [type="reset"]:-moz-focusring,
    [type="submit"]:-moz-focusring {
    outline: 1px dotted ButtonText;
    }
    fieldset {
    padding: 0.35em 0.75em 0.625em;
    }
    legend {
    box-sizing: border-box; 
    color: inherit; 
    display: table; 
    max-width: 100%; 
    padding: 0; 
    white-space: normal; 
    }
    progress {
    vertical-align: baseline;
    }
    textarea {
    overflow: auto;
    }
    [type="checkbox"],
    [type="radio"] {
    box-sizing: border-box; 
    padding: 0; 
    }
    [type="number"]::-webkit-inner-spin-button,
    [type="number"]::-webkit-outer-spin-button {
    height: auto;
    }
    [type="search"] {
    outline-offset: -2px; 
    }
    [type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
    }
    ::-webkit-file-upload-button {
    -webkit-appearance: button; 
    font: inherit; 
    }
    details {
    display: block;
    }
    summary {
    display: list-item;
    }
    template {
    display: none;
    }
    [hidden] {
    display: none;
    }
`;

export default EstilosGlobais;