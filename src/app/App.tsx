//router
import Router from './router/router';
//styles
import './app.scss';

const App = (): JSX.Element => {
  return (
    <div className="app">
      <Router />
    </div>
  );
};

export default App;
