import Image from 'next/image'
import * as s from './styles'
export default function Hub() {
	return (
		<s.hubComponent>
			<section className='hearth'>
				<Image
					className='circle'
					src='/assets/Thorus 3.png'
					alt='thorus'
					width={320}
					height={320}
				/>
				<header className='head'>ENTER THE CRONOS HUB</header>
				<h1 className='title'>The Heart of the Interchain.</h1>
				<footer className='footer'>
					Serving as the economic center of Cronos, the Cronos Hub is
					a blockchain that provides vital services to the Interchain
				</footer>
			</section>

			<section className='items'>
				<div className='item'>
					<Image
						className='img'
						src={'/assets/Group 8662.svg'}
						alt=''
						width={243}
						height={243}
					></Image>
					<h1>Marketplace</h1>
					<p>
						Set to operate a next-gen decentralized exchange,
						swapping digital assets from across the Interchain, with
						very low fees and instant transaction confirmation.
					</p>
				</div>
				<div className='item'>
					<Image
						className='img'
						src={'/assets/Group 8663.svg'}
						alt=''
						width={243}
						height={243}
					></Image>
					<h1>Security provider</h1>
					<p>
						With the upcoming Interchain Security feature, HEDRON
						will soon be securing many chains, in exchange for
						additional staking rewards.
					</p>
				</div>
				<div className='item'>
					<Image
						className='img'
						src={'/assets/Group 8664.svg'}
						alt=''
						width={243}
						height={243}
					></Image>
					<h1>Router</h1>
					<p>
						A core mission of the Hub – to connect chains by
						establishing IBC connections with compatible chains and
						operating decentralized bridges with chains like
						Ethereum and Bitcoin.
					</p>
				</div>
				<div className='item'>
					<Image
						className='img'
						src={'/assets/Group 8665.svg'}
						alt=''
						width={243}
						height={243}
					></Image>
					<h1>Custodian</h1>
					<p>
						Located at the crossroads of the Interchain, the Hub is
						extremely secure, the best place to hold digital assets
						and manage accounts across many chains.
					</p>
				</div>
			</section>
			<div className='bttn white'>
				Cosmos Hub
				<Image src='./Vector.svg' width={10} height={10} alt='' />
			</div>
		</s.hubComponent>
	)
}
