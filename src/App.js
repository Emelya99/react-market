import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';
import Drawer from './components/Drawer';
import Form from './components/Form';

function App(props) {
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
      <Header />
      <main className='main'>
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </main>
      <Footer onOpenPolitic={handleOpenPolitic} />
      {drawerOpened && <Drawer onClosePolitic={handleClosePolitic} />}
    </div>
  );
}

export default App;