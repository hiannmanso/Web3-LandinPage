import styled from 'styled-components'

interface WellcomeCompnentProps {
	imageSizes: {
		[key: string]: { width: number; height: number }
	}
}
export const WellcomeComponent = styled.main<WellcomeCompnentProps>`
	margin-bottom: 33%;
	margin-top: 10%;
	position: relative;
	width: 100vw;
	.background {
		overflow: hidden;
		width: 100%;
		height: 400px;
		/* height: 100%; */

		position: absolute;
		z-index: -1;

		.firstImg {
			left: 20%;
			top: 0;
			width: 150px;
			height: 150px;
		}
		.secondImg {
			right: -100px;
			bottom: 0;
			width: 300px;
			height: 300px;
		}
		.firstImg,
		.secondImg {
			filter: blur(0.3rem);
			position: absolute;
		}
	}

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
	@media (max-width: 760px) {
		.background {
			height: 200px;
		}
		.firstImg {
			width: 70px !important;
			height: 70px !important;
		}
		.secondImg {
			width: 120px !important;
			height: 120px !important;
			right: -40px !important;
		}
		footer {
			max-width: 25em;
		}
	}
	@media (min-width: 768px) {
		footer {
			max-width: 25em;
		}
	}
	@media (min-width: 1024px) {
		.background {
			height: 700px;
		}

		h1 {
			max-width: 10em;
		}
		.firstImg {
			width: 300px !important;
			height: 300px !important;
		}
		.secondImg {
			right: -30% !important;
			width: 662px !important;
			height: 662px !important;
		}
	}
`
