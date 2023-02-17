import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login,Registration, Dashboard, Users, UserDetails } from "./pages";
import { ToastContainer } from 'react-toastify';
import Layout from "./components/Layout";
import { Suspense } from 'react'
import LoadingScreen from '../src/components/LoadingSreen/LoadingScreen';


function App() {

  const renderLoader = () => <LoadingScreen />

  return (
    <Suspense fallback={renderLoader()}>
      <ToastContainer />
      <Router>
        <Routes>
          <Route path="/" element={<Registration />} />
          {/* <Route path="/dashboard" element={<Layout children={<Users />} />} /> */}
          {/* <Route path="/users" element={<Layout children={<Users />} />} /> */}
          {/* <Route path="/users/:id" element={<Layout children={<UserDetails />} />} /> */}
        </Routes>
      </Router>
    </Suspense>
  );
};

export default App;