import { Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import Dashboard from './pages/dashboard/Dashboard';
import Footer from './components/Footer/Footer';

import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Switch>
        {/* <Route path="/products/:productId">
          <SingleProduct />
        </Route>
        <Route path="/products">
          <Products />
        </Route> */}
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
