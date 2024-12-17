import { ThemeProvider } from "styled-components"
import Home from "./pages/Home"
import { darkTheme } from "./utils/theme"

function App() {
	return (
		<ThemeProvider theme={darkTheme}>
			<Home />
		</ThemeProvider>
	)
}

export default App