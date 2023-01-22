import styled from 'styled-components'

export const WellcomeComponent = styled.main`
	margin-top: 10%;
	.infosWellcome {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 100%;
	}
	header {
		margin-top: 0.9em;
		margin-bottom: 0.9em;
		font-style: normal;
		font-weight: 500;
		font-size: 1.4em;

		letter-spacing: 0.1em;
		color: rgba(255, 255, 255, 0.6);
	}
	h1 {
		font-style: normal;
		font-weight: 400;
		font-size: 5em;

		text-align: center;
		letter-spacing: -0.02em;

		background: linear-gradient(
			94.78deg,
			#ffffff 1.7%,
			rgba(255, 255, 255, 0.44) 100.26%
		);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}
	footer {
		font-style: normal;
		font-weight: 400;
		font-size: 1.3em;
		text-align: center;
		letter-spacing: 0.01em;

		color: #ffffff;
	}
	@media (min-width: 768px) {
		header,
		footer {
			font-size: 2em;
			max-width: 25em;
		}
		h1 {
			font-size: 10em;
		}
	}
	@media (min-width: 1024px) {
		header,
		footer {
			font-size: 2.4em;
		}
		h1 {
			font-size: 15.3em;
			max-width: 10em;
		}
	}
`
