import { Route, Routes, BrowserRouter } from 'react-router-dom';
//pages
import * as Pages from './pages';

const App = (): JSX.Element => {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path={'/'} element={<Pages.MainPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
