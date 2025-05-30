import logo from './logo.svg';
import './App.css';
import Body from './components/Body';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
// import { dom } from '@fortawesome/fontawesome-svg-core'
function App() {
  return (
    <div className="App">
      <Provider store={appStore}>
      <Body/>
      </Provider>
    </div>
  );
}

export default App;
