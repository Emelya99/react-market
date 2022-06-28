import React from 'react';
import FooterContainer from './components/Footer/FooterContainer';
import Drawer from './components/Drawer';
import HeaderContainer from './components/Header/HeaderContainer';
import {Routes, Route, useLocation} from 'react-router-dom';
import {useLayoutEffect} from 'react';

const FormContainer = React.lazy(() => import('./components/Form/FormContainer'));
const Content = React.lazy(() => import('./components/Content'));

function App() {
  const [drawerOpened, setdrawerOpened] = React.useState(false);

  const Wrapper = ({children}) => {
    const location = useLocation();
    useLayoutEffect(() => {
      document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children
  } 

  function handleOpenPolitic() {
    setdrawerOpened(true);
    document.body.style.overflow = "hidden";
  }

  function handleClosePolitic() {
    setdrawerOpened(false);
    document.body.style.overflow = "visible";
  }

  return (
    <div className="wrapper">
      <HeaderContainer />
      <main className='main'>
        <React.Suspense fallback={<div>Loading...</div>}>
          <Wrapper>
            <Routes>
              <Route path="/" element={<Content />} />
              <Route path="/form" element={<FormContainer />} />
            </Routes>
          </Wrapper>
        </React.Suspense>
      </main>
      <FooterContainer onOpenPolitic={handleOpenPolitic} />
      {drawerOpened && <Drawer onClosePolitic={handleClosePolitic} />}
    </div>
  );
}

export default App;