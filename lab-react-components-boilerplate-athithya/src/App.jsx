import './App.css';

import GallaryFooter from './components/GallaryFooter';
import Header from './components/Header';
import FourImages from './components/fourImages';
function App() {
  return (
    <div>
      <Header />
      <FourImages />
      {/* adding footer component */}
      <GallaryFooter />
    </div>
  );
}

export default App;
