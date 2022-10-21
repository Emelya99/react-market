import React from 'react';
import FooterContainer from './components/Footer/FooterContainer';
import Drawer from './components/Drawer';
import Loader from './components/Loader';
import HeaderContainer from './components/Header/HeaderContainer';
import { Routes, Route, useLocation } from 'react-router-dom';

const FormContainer = React.lazy(() => import('./components/Form/FormContainer'));
const Content = React.lazy(() => import('./components/Content'));

function App() {
  let location = useLocation();
  const [drawerOpened, setdrawerOpened] = React.useState(false);

  function handleOpenPolitic(e) {
    setdrawerOpened(true);
    document.body.style.overflow = 'hidden';
  }

  function handleClosePolitic() {
    setdrawerOpened(false);
    document.body.style.overflow = 'visible';
  }

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="wrapper">
      <HeaderContainer />
      <main className="main">
        <React.Suspense fallback={<Loader />}>
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
