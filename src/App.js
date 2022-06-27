import React from 'react';
import { Routes, Route } from 'react-router-dom';
import FooterContainer from './components/Footer/FooterContainer';
import Drawer from './components/Drawer';
import HeaderContainer from './components/Header/HeaderContainer';

const FormContainer = React.lazy(() => import('./components/Form/FormContainer'));
const Content = React.lazy(() => import('./components/Content'));

function App() {
  const [drawerOpened, setdrawerOpened] = React.useState(false);

  function handleOpenPolitic() {
    setdrawerOpened(true);
    document.body.style.overflow = "hidden"; // так делать нельзя
  }

  function handleClosePolitic() {
    setdrawerOpened(false);
    document.body.style.overflow = "visible"; // так делать нельзя
  }

  return (
    <div className="wrapper">
      <HeaderContainer />
      <main className='main'>
        <React.Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Content />} />
            <Route path="/form" element={<FormContainer />} />
          </Routes>
        </React.Suspense>
      </main>
      <FooterContainer onOpenPolitic={handleOpenPolitic} />
      {drawerOpened && <Drawer onClosePolitic={handleClosePolitic} />}
    </div>
  );
}

export default App;