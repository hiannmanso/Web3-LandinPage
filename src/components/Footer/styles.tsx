import styled from 'styled-components'

export const FooterComponent = styled.footer`
	margin-top: 15%;

	.transmissions {
		padding: 50px;
		height: 150px;
		width: 80%;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		h1 {
			font-family: 'DM Sans';
			font-style: normal;
			font-weight: 700;
			font-size: 50px;
			width: 100%;
			letter-spacing: 0.01em;
			color: #ffffff;
		}
		h2 {
			width: 100%;
			font-style: normal;
			font-weight: 400;
			font-size: 27px;
			letter-spacing: 0.01em;
			color: #ffffff;
		}
		input {
			max-width: 480px;
			height: 91.79px;
			left: 960px;
			top: 4764.75px;
			border: none;
			background: rgba(255, 255, 255, 0.08);
			box-sizing: border-box;
			font-family: 'DM Sans';
			font-style: normal;
			font-weight: 400;
			font-size: 27px;
			line-height: 35px;
			letter-spacing: 0.01em;
			padding: 28px 0 28px 32px;
			color: #ffffff;
		}

		border-top: 1px solid rgba(255, 255, 255, 0.1);
		border-bottom: 1px solid rgba(255, 255, 255, 0.1);

		margin: 0 auto 20px;
		.boxTransmission {
			width: 100%;
			display: flex;
			flex-direction: column;
			justify-content: center;
			div {
				display: flex;
				flex-direction: row;
				align-items: center;
			}
			.icon {
				margin-left: 5px;
				width: 8px;
			}
		}
	}
	.infoFooter {
		width: 80%;
		margin: 0 auto;
		.clm {
			width: 180px;
		}
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
		/* text-align: center; */
		h1 {
			padding-bottom: 0.3em;
			font-family: 'DM Sans';
			font-style: normal;
			font-weight: 500;
			font-size: 3.5em;

			letter-spacing: 0.01em;
			color: #ffffff;
		}
		h1:hover,
		p:hover {
			cursor: pointer;
			transform: scale(1.1);
		}
		p {
			padding-bottom: 4px;
			font-family: 'DM Sans';
			font-style: normal;
			font-weight: 400;
			font-size: 2.8em;
			line-height: 36px;
			letter-spacing: 0.01em;

			color: rgba(255, 255, 255, 0.45);
		}
	}
	@media (max-width: 767px) {
		.transmissions {
			padding: 10px;
			height: 120px;
			h1 {
				font-size: 2.5em;
				text-align: center;
			}
			h2 {
				font-size: 1.25em;
				text-align: center;
			}
			input {
				margin-left: 10px !important;
				width: 120px !important;
				height: 40px !important;
				font-size: 15px;
			}
		}
		.infoFooter {
			h1 {
				font-size: 1.3em;
			}
			p {
				font-size: 1em;
			}
		}
		.clm {
			margin: 0 2.5px;
		}
	}
	@media (min-width: 767px) {
		.transmissions {
			h1 {
				font-size: 5em;
			}
			h2 {
				font-size: 2.7em;
			}
		}
		.clm {
			margin: 6px;
		}
	}
`
