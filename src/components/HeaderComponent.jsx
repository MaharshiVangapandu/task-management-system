import React from 'react';

export const HeaderComponent = () => {
  return (
    <div>
      <header>
        <nav className='navbar navbar-dark bg-dark d-flex justify-content-center'>
          <a className='navbar-brand' href='/'>Task Management System</a>
        </nav>  
      </header>
    </div>
  );
};