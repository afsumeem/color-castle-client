import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Login from './pages/UserLogin/Login/Login';
import AllServices from './pages/allServices/AllServices/AllServices';
import Register from './pages/UserLogin/Register/Register';
import Details from './pages/ServiceDetails/Details/Details';
import AuthProvider from './Context/AuthProvider';
import Dashboard from './pages/Dashboard/Dashboard/Dashboard';
import MakeAdmin from './pages/Dashboard/MakeAdmin/MakeAdmin';
import AddReview from './pages/Dashboard/AddReview/AddReview';
import AddService from './pages/Dashboard/AddService/AddService';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';
import AdminRoute from './pages/AdminRoute/AdminRoute';
import MyOrders from './pages/Dashboard/MyOrders/MyOrders/MyOrders';
import Payment from './pages/Dashboard/Payment/Payment';
import ManageAllOrders from './pages/Dashboard/ManageAllOrders/ManageAllOrders/ManageAllOrders';
import ManageProducts from './pages/Dashboard/ManageProducts/ManageProducts/ManageProducts';


function App() {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<AllServices />} />
          <Route path="/service/:id" element={<PrivateRoute>
            <Details />
          </PrivateRoute>} />

          <Route path="/contact" element={<Contact />} />

          <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>}>


            <Route path={`/dashboard/makeAdmin`} element={<AdminRoute> <MakeAdmin></MakeAdmin></AdminRoute>} />
            <Route path={`/dashboard/addService`} element={<AdminRoute><AddService /></AdminRoute>} />
            <Route path={`/dashboard/manageService`} element={<AdminRoute><ManageProducts /></AdminRoute>} />
            <Route path={`/dashboard/manageOrder`} element={<AdminRoute><ManageAllOrders /></AdminRoute>} />


            <Route path={`/dashboard/addReview`} element={<AddReview />} />
            <Route path={`/dashboard/myOrder`} element={<MyOrders />} />
            <Route path={`/dashboard/payment`} element={<Payment />} />
          </Route>

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
