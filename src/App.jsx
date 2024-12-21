import { ThemeProvider } from "styled-components";
import Home from "./pages/Home/Index";
import { darkTheme } from "./utils/theme";

function App() {
    return (
        <ThemeProvider theme={darkTheme}>
            <Home />
        </ThemeProvider>
    );
}

export default App;
