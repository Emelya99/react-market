import React from 'react';
import { Routes, Route } from 'react-router-dom';
import FooterContainer from './components/Footer/FooterContainer';
import Content from './components/Content';
import Drawer from './components/Drawer';
import FormContainer from './components/Form/FormContainer';
import HeaderContainer from './components/Header/HeaderContainer';

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
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/form" element={<FormContainer />} />
        </Routes>
      </main>
      <FooterContainer onOpenPolitic={handleOpenPolitic} />
      {drawerOpened && <Drawer onClosePolitic={handleClosePolitic} />}
    </div>
  );
}

export default App;