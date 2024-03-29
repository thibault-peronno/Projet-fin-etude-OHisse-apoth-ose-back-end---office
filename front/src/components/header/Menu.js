// eslint-disable-next-line

// == import 

// npm
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';

// local
import logo from '../../img/logo-complet-bleu.png';
import LogoutLogo from '../../img/icons/logout.png'
import { handleMenu, handleDark, logout } from '../../actions/settings';
// style
import './menu.scss';


function Menu() {

  const dispatch = useDispatch();

  const handleMenuActif = () => {
    dispatch(handleMenu());
  };
  const handleDarkActiv = () => {
    dispatch(handleDark());
  };
  const onMenu = useSelector((state) => state.settings.burgerMenu);
  // const onDark = useSelector((state) => state.settings.darkMode);
  const isLogged = useSelector((state) => state.settings.isLogged);
  // console.log(isLogged);
 
  const handleLogout = () => {
    dispatch(logout());
  }

  return (

    <section className='header'>    
    <Link to='/' >   <img src={logo} alt='logo' className='header_logo' /></Link>
      <h1 className='header_backOffice-txt'> Back office</h1>
      <span
        className='header-burger'
        onClick={handleMenuActif}
      >
      </span>
      {isLogged && (

        <div className={onMenu ? 'header_content-menu menu-actif' : 'header_content-menu'}>
          <span className='header-menu'>
            <nav>
              <ul className='header_menu'>
                <li className='header-menu_spots menu-txt'><NavLink to='/tous-les-spots'>Spots</NavLink></li>
                <li className='header-menu_users menu-txt'><NavLink to='/tous-les-utilisateurs'>Utilisateurs</NavLink></li>
                <li className='header-menu_comments menu-txt'><NavLink to='/tous-les-commentaires'>Commentaires</NavLink></li>
              </ul>
            </nav>
            {/* <span className='header-content-menu_dark-mode'>
              <button
                className='header-burger_btn'
                onClick={handleDarkActiv}
              >

              </button>
            </span> */}

          </span>
          <span className='header-content-menu_log'>
          <NavLink to='/' onClick={handleLogout} className='header-content-menu_a'>
            <span className='header-content-menu_log'>
              <img
                src={LogoutLogo}
                alt='déconnexion'
                className='menu-log_img'
              />
              {/* <p className='menu-log_txt menu-txt'>Déconnexion</p> */}
            </span>
          </NavLink>
          </span>
        </div>
      )}
    </section>

  );
}

export default Menu