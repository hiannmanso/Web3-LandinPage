import styled from 'styled-components'

export const hubComponent = styled.main`
	width: 300px;
	margin: 15% auto 0;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	position: relative;
	.hearth {
		width: 320px;
		height: 320px;
		display: flex;
		flex-direction: column;
		/* align-items: center;
		justify-content: center; */
		h1,
		footer,
		header {
			text-align: center;
		}
		word-break: break-word;

		background: url('/Thorys 3.png') no-repeat fixed center;
	}

	.items {
		display: grid;
		grid-template-columns: 1fr 1fr;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
	}

	.item {
		display: flex;
		flex-direction: column;
		max-width: 450px;
		padding: 10px;
		align-items: flex-start;
		text-align: left;
		word-break: break-all;
		h1 {
			font-family: 'DM Sans';

			padding: 7px 0 7px;
			font-style: normal;
			font-weight: 700;
			font-size: 50px;
			text-align: center;
			letter-spacing: 0.01em;
			color: #ffffff;
		}
		p {
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
		left: calc(50% - 320px);
	}
	button {
		width: 281px;
		height: 86px;
		border: none;
		display: flex;
		flex-direction: row;
		padding: 30px 114px;
		gap: 39px;
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
	@media (max-width: 400) {
		.items {
			display: flex;
		}
	}
	@media (max-width: 768px) {
		.item {
			max-width: 150px;
			h1 {
				font-size: 1.5em;
			}
			p {
				font-size: 1em;
			}
		}
		.img {
			width: 150px !important;
			height: 150px !important;
		}
		button {
			width: 100px;
			height: 50px;
		}
	}
	@media (min-width: 768px) {
		width: 800px;
		.hearth {
			display: flex;
			flex-direction: column;

			margin: 0 auto;

			width: 600px;
			height: 400px;
		}
		/* width: 527;
			height: 527px; */
		/* max-width: 840px;
			max-height: 840px; */
	}
`
