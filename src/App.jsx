import React from 'react';
import './App.css';
import Partner from './Partner';

function App() {
  
  const mainHeader = () => {
    return (
      <header className="header">
        <div className="container">
          <div className="header-nav">
            <img className="header-nav__icon" src="/img/nav-icons/icon_desktop.png" alt="Наш логотип" width="40" height="40" />

            <div className="header-nav__user">
              <div className="header-nav__user-photo">
                <h2 className="header-nav__user-name">Константин</h2>
                <img className="header-nav__user-image" width="40" height="40" src="img/nav-icons/user_icon.png" alt="Профиль" />
              </div>
              <img className="header-nav__user-icon" src="/img/nav-icons/user_icon.svg" alt="Профиль" width="24" height="24" />
              <div className="header-nav__user-notification">
                <img className="header-nav__user-bell" src="/img/nav-icons/user_bell.png" alt="Уведомления" />
                <span className="header-nav__user-bell-counter">3</span>
              </div>
            </div>

            <div className="header-nav__search">
              <button type="submit" className="header-nav__search-button">
                <img className="header-nav__search-image" src="img/nav-icons/search-icon.png" alt="Поиск" />
              </button>
              <input className="header-nav__search-input" type="text" placeholder="Найти..." />
            </div>
          </div>
        </div>
      </header>
    )
  };

  const partners = () => {
    return (
      <main class="main">
        <div class="container">
          <h2 class="main__title">Наши партнеры</h2>
          <h2 class="main__title--desktop">Наши партнёры</h2>
          <div class="partner">
            <Partner></Partner>
          </div>
        </div>
      </main>
    )
  }
  return (
    <>
      {mainHeader()}
      {partners()}
    </>
  )
}

export default App;
