import GlobalStyles from '@styles/globals'
import { themeDark } from '@styles/themes/dark'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider theme={themeDark}>
			<GlobalStyles />
			<Component {...pageProps} />
		</ThemeProvider>
	)
}
