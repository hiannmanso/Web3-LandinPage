import { createGlobalStyle } from 'styled-components'
import { reset } from 'styled-reset'

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap');
    ${reset}
    :root{
        font-size:62.5%;
        font-family: 'DM Sans', sans-serif;
        background-color: #050505;
        color: #FFFFFF;    
        box-sizing: border-box;
        /* padding-top: 3.0em; */
    }
`
