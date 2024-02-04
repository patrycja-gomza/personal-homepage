import { HashRouter, Switch, Route } from "react-router-dom";
import ArtPage from "./ArtPage";
import PersonalHomepage from "./PersonalHomepage";

function App() {
    return (
        <HashRouter>
            <Switch>
                <Route path="/art" component={ArtPage} />
                <Route path="/" component={PersonalHomepage} />
            </Switch>
        </HashRouter>
    );
}

export default App;