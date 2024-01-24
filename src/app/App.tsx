import { Route, Routes, BrowserRouter } from 'react-router-dom';
//pages
import * as Pages from '../pages';
//variables
import { RoutingPaths, rootBaseName } from '../variables/routing-variables';
//styles
import './app.scss';

const App = (): JSX.Element => {
  return (
    <div className="app">
      <BrowserRouter basename={rootBaseName}>
        <Routes>
          <Route path={RoutingPaths.ROOT} element={<Pages.MainPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
