import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import Dashboard from './components/Dashboard';
import Cart from './components/Cart';
import RootLayout from './components/RootLayout';

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route>
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Dashboard />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Route>
    </Route>
  ))
  return (
    <div className='App'>
      {/* <Product/> */}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
