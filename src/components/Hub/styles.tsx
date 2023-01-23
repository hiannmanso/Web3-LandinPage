import styled from 'styled-components'

export const hubComponent = styled.main`
	width: 300px;
	margin: 15% auto 0;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	.hearth {
		position: relative;
		/* background-image: url(''); */
		width: 320px;
		height: 320px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		h1,
		footer,
		header {
			text-align: center;
		}

		word-break: break-word;

		background: url('/Thorys 3.png') no-repeat fixed center;
	}

	.items {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
	}

	.item {
		display: flex;
		flex-direction: column;
		width: 100%;
		margin: 10px;
		align-items: flex-start;
		text-align: left;
		justify-content: center;
		align-items: center;
		/* word-break: break-all; */
		h1 {
			font-family: 'DM Sans';

			padding: 16px 0 16px;
			font-style: normal;
			font-weight: 700;
			font-size: 50px;
			text-align: center;
			letter-spacing: 0.01em;
			color: #ffffff;
		}
		p {
			width: 90%;
			font-family: 'DM Sans';
			font-style: normal;
			font-weight: 400;
			font-size: 27px;
			letter-spacing: 0.01em;
			text-align: center;

			color: #ffffff;
		}
	}
	.circle {
		position: absolute;
		z-index: -1;
		filter: blur(0.6em);
		top: 0;
		width: 100%;
		height: 100%;
	}
	.bttn {
		width: 281px;
		height: 86px;
		border: none;
		display: flex;
		flex-direction: row;
		background: linear-gradient(
			95.46deg,
			#ffffff 0%,
			rgba(255, 255, 255, 0.51) 101.07%
		);
		align-items: center;
		justify-content: center;
		font-weight: 500;
		font-size: 20px;
		line-height: 26px;

		color: #06070a;
	}
	.img:hover {
		scale: 1.2;
	}

	@media (max-width: 768px) {
		.item {
			display: flex;
			flex-wrap: wrap;
			/* max-width: 150px; */
			h1 {
				font-size: 1.7em;
			}
			p {
				font-size: 1.3em;
			}
		}
		.img {
			width: 150px !important;
			height: 150px !important;
		}
		.hearth {
			h1 {
				padding: 6px 0;
			}
		}
		.bttn {
			width: 100px !important;
			height: 40px !important;
			font-size: 10px !important;
			margin-top: 20px;
		}
		align-items: center;
	}
	@media (min-width: 768px) {
		width: 750px;
		.items {
			display: grid;
			grid-template-columns: 1fr 1fr;
		}
		.hearth {
			display: flex;
			flex-direction: column;

			margin: 0 auto;

			width: 600px;
			height: 600px;
			h1 {
				padding: 46px 0;
			}
		}
	}
`
