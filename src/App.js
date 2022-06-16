import { BrowserRouter as Router } from 'react-router-dom';
import useViewport from './useViewPort';
import Home from './pages/Home';
function App() {
  const viewPort = useViewport();
  const isTabletAndMobile = viewPort.width <= 960;

  if (isTabletAndMobile) {
    return <div className="isMobileTablet">The website only supports devices larger than 960px</div>;
  } else {
    return (
      <div className="App">
        <Router>
          <Home />
        </Router>
      </div>
    );
  }
}

export default App;
