import Image from 'next/image'
import * as s from './styles'

export default function Footer() {
	return (
		<s.FooterComponent>
			<div className='transmissions'>
				<div className='boxTransmission'>
					<h1 className='titleTransmission'>Receive transmissions</h1>

					<h2 className='subtitleTransamission'>
						Unsubscribe at any time. Privacy policy
						<Image
							className='icon'
							src={'./arrow.svg'}
							width={8}
							height={8}
							alt=''
						/>
					</h2>
				</div>
				<input type='text' placeholder='Your Email' />
			</div>
			<div className='infoFooter'>
				<div className='clm 1'>
					<h1>Learn</h1>
					<p>Introduction</p>
					<p>Features</p>
					<p>Staking</p>
					<p>Get HEDRON</p>
					<p>FAQ</p>
				</div>
				<div className='clm 2'>
					<h1>Build</h1>
					<p>Developer Portal</p>
					<p>Ignite CLI</p>
					<p>Cronos SDK</p>
					<p>IBC Protocol</p>
				</div>
				<div className='clm 3'>
					<h1>Explore</h1>
					<p>Tokens</p>
					<p>Apps & Services</p>
					<p>Wallets</p>
					<p>Gravity DEX</p>
					<p>Blog</p>
				</div>
				<div className='clm 4'>
					<h1>Participate</h1>
					<p>Community</p>
					<p>Contributors</p>
					<p>Events</p>
					<p>Newsletters</p>
				</div>
				<div className='clm 5'>
					<h1>Resources</h1>
					<p>About</p>
					<p>Press Kit</p>
					<p>Design</p>
					<p>Resources</p>
					<p></p>
				</div>
			</div>
		</s.FooterComponent>
	)
}
