import ReactDOM from "react-dom/client"
import App from "./App"
import { ContextState } from "./Context/Context"
import { GameState } from "./Context/GameContext"

ReactDOM.createRoot(document.getElementById("root")).render(
    <ContextState>
        <GameState>
            <App/>
        </GameState>
    </ContextState>
)