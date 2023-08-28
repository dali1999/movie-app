import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";

function App() {
  return (
    <Router>
      {/* Route 찾음 */}
      <Switch>
        {/* /movie로 이동 */}
        <Route path="/movie/:id">
          <Detail />
        </Route>
        {/* Home으로 이동 */}
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
