import './App.css';
import { BrowserRouter , Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home.jsx'
import Services from './pages/Services.jsx';
import CarInspect from './pages/CarInspection.jsx';
import CarRepair from './pages/CarRepair.jsx';
import Contact from './pages/Contact.jsx';
import About from './pages/About.jsx';
import Navbar from './components/navbar/Navbar.jsx'
import Signup from './pages/Signup.jsx';
import Signin from './pages/Login.jsx';
import ServicesForm from './components/forms/ServicesForm.jsx'
import Footer from './components/footer/Footer.jsx';
import ForgetPass from './components/ForgetPassword/ForgetPass';
import CreateAd from './pages/Ads/createAd';
import EditAdForm from './pages/Ads/EditAdForm';
import DisplayAds from './pages/Ads/ads';
import MyAds from './pages/Ads/myads';
import Ad from './pages/Ads/ad'
import EmailVerify from "./components/EmailVerify/emailVerify";
import User from './pages/User';
import ChangePassword from './pages/ChangePassword';
import PasswordReset from './components/PasswordReset/PasswordReset';
import  UserProfile  from './pages/UserProfile';
import NewUserOverlay from './components/NameOverlay/NewUserOverlay';
//import getCurrentUser from './utils/getCurrentUser';
import { useEffect,useState } from 'react';
import {
  QueryClient,
  QueryClientProvider,
} from "react-query";

const queryClient = new QueryClient();

function Layout({ children }) {
  return (
    <>
    <QueryClientProvider client={queryClient}>
      {children}
      <Footer/>
      </QueryClientProvider>
    </>
  );
}

const App =()=> {
  //const currentUser = getCurrentUser();
  const [showNewUserOverlay, setShowNewUserOverlay] = useState(false);

  useEffect(() => {
    const hasSeenOverlay = localStorage.getItem('hasSeenOverlay');
    if (!hasSeenOverlay) {
      setShowNewUserOverlay(true);
      localStorage.setItem('hasSeenOverlay', 'true');
    }
  }, []);

  const closeNewUserOverlay = () => {
    setShowNewUserOverlay(false);
  };
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("isLoggedIn") === "true");

  useEffect(() => {
    const storedIsLoggedIn = localStorage.getItem("isLoggedIn");
    if (storedIsLoggedIn) {
      setIsLoggedIn(storedIsLoggedIn === "true");
    }else{
      localStorage.removeItem("isLoggedIn");
    }
  }, []);
    console.log("isLoggedIn", isLoggedIn);
  return (
    <BrowserRouter>
    <Navbar onLogout={() => setIsLoggedIn(false)}  />
    {showNewUserOverlay ? ( <NewUserOverlay onClose={closeNewUserOverlay} />) : null}
      <Routes>
        <Route path="/" element={<Layout><Home/></Layout>} />
        <Route path='signin' element={<Signin  onLogin={() => setIsLoggedIn(true)}/>}/>
        <Route path="/signin" element={<Signin  />}/>
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/services" element={<Layout><Services /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
        <Route path="/car-repair" element={<Layout><CarRepair /></Layout>} />
        <Route path="/car-inspect" element={<Layout><CarInspect /></Layout>} />
        <Route path="/forgetpass" element={<ForgetPass />} />
        <Route path="/signin" element={isLoggedIn ? ( <Navigate to="/" />):(<Signin/>)} />
        <Route path="/signup" element={isLoggedIn ? ( <Navigate to="/" /> ):(<Signup/>)} />
        <Route path="/service-form" element={<Layout><ServicesForm /></Layout>} />
        <Route path="/create-ad" element={<Layout><CreateAd/></Layout>} />
        <Route path="/ads" element={<Layout><DisplayAds/></Layout>} />
        <Route path="/myads" element={<Layout><MyAds/></Layout>} />
        <Route path="/edit-ad/:id" element={<Layout><EditAdForm/></Layout>} />
        <Route path="/userprofile/:id" element={<Layout><UserProfile /></Layout>} />
        <Route path="/ad/:id" element={<Layout><Ad/></Layout>} />
        <Route path="/auth/:id/verify/:token" element={<EmailVerify/>} />
        <Route path="/user" element={<Layout><User/></Layout>} />
        <Route path="/changepass" element={<ChangePassword/>} />
        <Route path="/auth/:id/:token" element={<PasswordReset />} />
        
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
