import Image from 'next/image'
import * as s from './styles'
export default function Community() {
	return (
		<s.CommunityComponent>
			<div className='background'>
				<Image
					className='img'
					src={'/Helix.svg'}
					width={618}
					height={618}
					alt='helix'
				/>
			</div>
			<div className='communityInfos'>
				<div className='boxInfos'>
					<div className='left'>
						<header className='head'>
							COMMUNITY-OWNED AND OPERATED
						</header>
						<h1 className='title'>
							Enter a Universe of Connected Services.
						</h1>
						<h2 className='footer'>
							Cronos apps and services connect using IBC, the
							Inter-Blockchain Communication protocol. This
							innovation enables you to freely exchange assets and
							data across sovereign.
						</h2>
						<div className='buttons'>
							<button className='bttn white' type='submit'>
								Learn
							</button>
							<button className='bttn black'>
								<span>Explore Tokens</span>
							</button>
						</div>
					</div>
					<div className='right'>
						<div className='numbersRight'>
							<h3 className='statics'>265+</h3>
							<p className='substatics'>Apps & services</p>
						</div>
						<div className='numbersRight'>
							<h3 className='statics'>$63B+</h3>
							<p className='substatics'>Digital assets </p>
						</div>
					</div>
				</div>
			</div>
		</s.CommunityComponent>
	)
}
