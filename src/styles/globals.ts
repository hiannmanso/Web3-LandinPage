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
        .head{
            font-style: normal;
		font-weight: 500;
		font-size: 1.4em;
        }
        .principal{
        font-style: normal;
		font-weight: 400;
		font-size: 5em;
        }
        .footer{
        font-style: normal;
        font-weight: 400;
        font-size: 1.3em;
        }
        @media(min-width:768px){
            .footer {
			font-size: 2em;
        }
            .head{
                font-size: 1.8em;
            }
		.principal {
			font-size: 10em;
		
		}
        }
        @media(min-width:1024px){
           .head{
            font-size:2.4em;}
            .footer{
                font-size: 3.3em;
            }
            .principal{
                font-size:15.3em
            }
    } 
    }
`
