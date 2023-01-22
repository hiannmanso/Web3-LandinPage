import { themeDark } from './themes/dark'

declare module 'styled-components' {
	type Theme = typeof themeDark

	export interface DefaultTheme extends Theme {}
}
