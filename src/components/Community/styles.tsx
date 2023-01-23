import styled from 'styled-components'

export const CommunityComponent = styled.main`
	position: relative;
	.background {
		position: absolute;
		top: 114px;
		left: -200px;
		z-index: -1;
	}
	.communityInfos {
		display: flex;
		align-items: center;
		flex-direction: column;
	}
	width: 100%;
	.left,
	.right {
		display: flex;
		flex-direction: column;

		width: 40%;
	}
	.left {
		justify-content: flex-start;
		padding-left: 10%;
		word-break: break-word;
	}
	.right {
		word-break: break-word;
		align-items: flex-end;
		padding-top: 57px;
	}
	.boxInfos {
		margin: 7em;
		display: flex;
		flex-direction: row;
		width: 100vw;
	}
	.numbersRight {
		margin-bottom: 1.5em;
		gap: 0.5em;
		display: flex;
		justify-content: end;
		align-items: flex-end;
		flex-direction: column;
	}
	.head {
		margin-bottom: 7px;
		text-align: center;
		height: 50px;
	}
	.footer {
		display: flex;
		margin-top: 1.6em;
		flex-direction: row;
		letter-spacing: 0.01em;
		padding-bottom: 0.5em;
	}
	.buttons {
		display: flex;
		flex-direction: row;
		button {
			width: 10em;
			font-size: 1em;
			height: 3em;
		}
	}

	@media (max-width: 768px) {
		.title {
			text-align: center;
			font-size: 3em;
		}

		.statics {
			font-size: 3em;
		}
		.footer {
			text-align: center;
			font-size: 1em;
		}
		.img {
			width: 230px !important;
			top: 57px !important;
			height: 230px !important;
		}
		.background {
			left: -100px !important;
		}
	}
	@media (min-width: 768px) {
		.buttons {
			button {
				font-style: normal;
				font-weight: 500;
				font-size: 20px;
				line-height: 26px;
			}
		}
	}
`
