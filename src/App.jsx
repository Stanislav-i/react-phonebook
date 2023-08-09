import { Route, Routes } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import { Home } from 'Pages/Home.jsx/Home';
import { Contacts } from 'Pages/Contacts/Contacts';
import { Register } from 'Pages/Register/Register';
import { Login } from 'Pages/Login/Login';

export const App = () => {
  return (
    <div
      // style={{
      //   height: '100vh',
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   fontSize: 40,
      //   color: '#010101'
      // }}
    >
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/contacts' element={<Contacts />}/>
          <Route path='/register' element={<Register />}/>
          <Route path='/login' element={<Login  />}/>
          <Route />
        </Routes>
      </main>
    </div>
  );
};
