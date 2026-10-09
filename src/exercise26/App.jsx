
import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';

const App = () => {
  const { isAuthenticated, logout } = React.useContext(AuthContext);

  const linkStyle = ({ isActive }) =>
    `rounded px-4 py-3 transition ${
      isActive
        ? 'bg-sky-600 text-white'
        : 'text-slate-700 hover:bg-slate-200'
    }`;

  return (
    <div className="min-h-screen bg-slate-100 px-4 py-6 text-slate-700 sm:px-8 lg:px-16">
      <header className="mb-8 border-b border-slate-200 pb-4">
        <h1 className="mb-4 text-xl font-semibold">
          React Blog
        </h1>

        <nav className="flex flex-wrap items-center gap-3">
          <NavLink to="/" end className={linkStyle}>
            Home
          </NavLink>

          {isAuthenticated ? (
            <>
              <NavLink to="/create" className={linkStyle}>
                Create Post
              </NavLink>

              <button
                onClick={logout}
                className="rounded bg-red-500 px-4 py-3 text-white transition hover:bg-red-600"
              >
                Logout
              </button>
            </>
          ) : (
            <NavLink to="/login" className={linkStyle}>
              Login
            </NavLink>
          )}
        </nav>
      </header>

      <main className="rounded-lg bg-white p-5 shadow-md sm:p-8">
        <Outlet />
      </main>
    </div>
  );
};

export default App;