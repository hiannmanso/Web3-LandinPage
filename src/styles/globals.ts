import { createGlobalStyle } from 'styled-components'
import { reset } from 'styled-reset'

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap');
    @font-face {
    font-family: 'Helvetica-Neue';
    src: url('../assets/font/Helvetica-Neue/Helvetica Neue Medium Extended/Helvetica Neue Medium Extended.ttf');
   
    font-weight: 400;
    font-style: normal;
    }
    
    ${reset}
    :root{
        font-size:62.5%;
        font-family: 'DM Sans', 'sans-serif';
        background-color: #050505;
        color: #FFFFFF;    
        box-sizing: border-box;
        .head{
            font-style: normal;
		font-weight: 500;
		font-size: 1.4em;
    
		letter-spacing: 0.1em;
		color: rgba(255, 255, 255, 0.6);
        }
        .principal{
        font-style: normal;
		font-weight: 400;
		font-size: 5em;
        letter-spacing: -0.02em;

background: linear-gradient(94.78deg, #FFFFFF 1.7%, rgba(255, 255, 255, 0.44) 100.26%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
text-fill-color: transparent;
        }
        .footer{
        font-style: normal;
        font-weight: 400;
        font-size: 1.3em;
        }
        .bttn:hover {
		cursor: pointer;
		transform: scale(1.2);
	}
        .title{
            font-family: 'Helvetica-Neue';
            font-style: normal;
            font-weight: 400;
            font-size: 3.6em;
            background: linear-gradient(94.78deg, #FFFFFF 1.7%, rgba(255, 255, 255, 0.44) 100.26%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-fill-color: transparent;
        }
        .statics{
            font-family:"Helvetica-Neue", sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 4.1em;
            background: linear-gradient(94.78deg, #FFFFFF 1.7%, rgba(255, 255, 255, 0.44) 100.26%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-fill-color: transparent;
        }
        .substatics{
            font-style: normal;
            font-weight: 400;
            font-size: 1.2em;
            text-align: center;
            letter-spacing: 0.01em;
            color: #FFFFFF;
        }

        .white{
            background: linear-gradient(95.46deg, #FFFFFF 0%, rgba(255, 255, 255, 0.51) 101.07%)
        }
        .black{
            background-color:#050505;
            
        }
        span{
            color: #FFFFFF;
        }
        .bttn{
            font-family: 'DM Sans';
            font-style: normal;
            font-weight: 500;
            font-size: 2em;
            width: 281px;
            height: 86px;
            border:none;
            /* identical to box height */


            color: #06070A;

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
        .title{
            font-size: 7em;
        }
        .statics{
            font-size:7.6em;
        }
        .substatics{
            font-size: 2.1em;
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
            .title{
            font-size: 9em;
        }
        .statics{
            font-size:11.7em;
        }
        .substatics{
            font-size: 3.0em;
        }
    } 
    }
`
