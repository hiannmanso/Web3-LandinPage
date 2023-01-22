import styled from 'styled-components'

export const Header = styled.header`
	width: 100vw;
	padding-top: 3em;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-around;
	padding-bottom: 2em;
	h1 {
		font-style: normal;
		font-weight: 500;
		font-size: 2.6em;
		opacity: 0.8;
	}
	h2 {
		font-style: normal;
		font-weight: 500;
		font-size: 2.6em;
		opacity: 0.8;
	}
	.options {
		padding: 0.5em;
		display: flex;
		flex-direction: row;
		gap: 5em;
		p {
			font-style: normal;
			font-weight: 500;
			font-size: 2em;
			color: #ffffff;
			opacity: 0.8;
		}
	}
	.getCronos {
		display: flex;
		flex-direction: row;
		align-items: center;
		h2 {
			padding-right: 0.5em;
		}
	}
	h1:hover,
	h2:hover,
	p:hover {
		cursor: pointer;
		opacity: 1;
	}
	@media (max-width: 480px) {
		padding-top: 1em;
		/* height: 100px; */
		h1,
		h2 {
			font-size: 1.5em;
		}
		h2 {
			text-align: center;
		}
		.options {
			gap: 1.2em;
			p {
				font-size: 0.9em;
				text-align: center;
			}
		}
	}
	@media (max-width: 575px) {
		h2 {
			text-align: center;
		}
	}
`
