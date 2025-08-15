import { Route, Routes } from 'react-router-dom'
import { HomePage } from 'src/pages/home-page/HomePage'
import { PrintPage } from 'src/pages/print-page/print-page'
import { TerminalPage } from 'src/pages/terminal-page/terminal-page'

export const MainRoutes = () => {
	return (
		<Routes>
			<Route path={'terminal'} element={<TerminalPage />} />
			<Route path={'terminal/print'} element={<PrintPage />} />
			<Route path={'/'} element={<HomePage />} />
		</Routes>
	)
}
