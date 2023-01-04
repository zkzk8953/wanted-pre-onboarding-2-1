import { RecoilRoot } from 'recoil';
import Main from './pages/Main/Main';
import './assets/styles/reset.css';

const App = () => {
  return (
    <RecoilRoot>
      <Main />
    </RecoilRoot>
  );
};

export default App;
