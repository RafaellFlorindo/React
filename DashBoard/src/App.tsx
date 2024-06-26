import { Outlet, NavLink } from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <div className="navbar">
        <h2>Dashboard</h2>
        <ul>
          <li>
            <NavLink
              to="/home"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contato"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Contato
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/sobre"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Sobre
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="main-content">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
