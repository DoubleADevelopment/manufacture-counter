import { Route, Routes, BrowserRouter } from 'react-router-dom';
//pages
import * as Pages from './pages';
//variables
import { RoutingPaths, rootBaseName } from '../variables/routing-variables';

const App = (): JSX.Element => {
  return (
    <BrowserRouter basename={rootBaseName}>
      <Routes>
        <Route path={RoutingPaths.ROOT} element={<Pages.MainPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
