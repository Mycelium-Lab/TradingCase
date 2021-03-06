import React, { useState, useEffect } from 'react';
//import {a} from "react-router-dom";
import logo from '../logo_swap.png';
import { Jazzicon } from '@ukstv/jazzicon-react';
import styled from '@emotion/styled';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../wallets/actions';
import { openModal } from '../redux/modal/actions';
import {rankList} from '../constants';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { setPath } from '../redux/info/actions';

const ModifiedJazzicon = styled(Jazzicon)({
  width: 20,
  height: 20,
});

function Header(props) {

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(prevState => !prevState);

  const data = useSelector(state => state.info.user);
  const csp = parseFloat(data.careerValue*10000000000).toFixed(2);
  const rank = data.rank;
  var validData = true;

  const wallet = useSelector(state => state.wallet.address);
  const provider = useSelector(state => state.wallet.provider);
  const dispatch = useDispatch();
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  useEffect(() => {
      
      const onLocationChange = () => {
          setCurrentPath(window.location.pathname);
      }
      window.addEventListener('popstate', onLocationChange);
      
      return () => {
          window.removeEventListener('popstate', onLocationChange)
      };
  }, [])

  if (Object.keys(data).length === 0) validData = false;

  function handleChange(page) {
    window.history.pushState(page, 'Title', `/staking/${page}`);
    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);
  }

  console.log(`%c path is ${currentPath}`);

  return (
      <header>
      <div className="container">
        <div className="nav">                
          <div className="nav-left header">
            <img src={logo} alt="" className="logo" />
            <input className="menu-btn" type="checkbox" id="menu-btn" />
            <label className="menu-icon" htmlFor="menu-btn"><span className="navicon" /></label>
            <ul className="menu">
              <li>
                <button style={(currentPath==='/staking' || currentPath==='/stake') ? {color:"#cacaca"} : {}} onClick={()=>handleChange('staking')}>
                  <svg viewBox="0 0 10 18" className="icon">
                    <path fill={(currentPath==='/staking' || currentPath==='/stake') && "#cacaca"} d="M0 12H2C2 13.08 3.37 14 5 14C6.63 14 8 13.08 8 12C8 10.9 6.96 10.5 4.76 9.97C2.64 9.44 0 8.78 0 6C0 4.21 1.47 2.69 3.5 2.18V0H6.5V2.18C8.53 2.69 10 4.21 10 6H8C8 4.92 6.63 4 5 4C3.37 4 2 4.92 2 6C2 7.1 3.04 7.5 5.24 8.03C7.36 8.56 10 9.22 10 12C10 13.79 8.53 15.31 6.5 15.82V18H3.5V15.82C1.47 15.31 0 13.79 0 12Z" />
                  </svg>
                  Staking
                </button>
              </li>
              <li>
                <button style={currentPath==='/invite' ? {color:"#cacaca"} : {}} onClick={()=>handleChange('invite')}>
                  <svg viewBox="0 0 20 15" className="icon">
                    <path fill={currentPath==='/invite' && "#cacaca"} d="M11.07 6.41005C11.6774 5.56132 12.0041 4.54377 12.0041 3.50005C12.0041 2.45634 11.6774 1.43879 11.07 0.590053C11.6385 0.202008 12.3117 -0.00378014 13 5.2579e-05C13.9283 5.2579e-05 14.8185 0.368802 15.4749 1.02518C16.1313 1.68156 16.5 2.57179 16.5 3.50005C16.5 4.42831 16.1313 5.31855 15.4749 5.97493C14.8185 6.6313 13.9283 7.00005 13 7.00005C12.3117 7.00389 11.6385 6.7981 11.07 6.41005ZM3.5 3.50005C3.5 2.80782 3.70527 2.13113 4.08986 1.55556C4.47444 0.979985 5.02107 0.531381 5.66061 0.266474C6.30015 0.00156766 7.00388 -0.067744 7.68282 0.0673043C8.36175 0.202353 8.98539 0.535695 9.47487 1.02518C9.96436 1.51466 10.2977 2.1383 10.4327 2.81724C10.5678 3.49617 10.4985 4.1999 10.2336 4.83944C9.96867 5.47899 9.52007 6.02561 8.9445 6.4102C8.36892 6.79478 7.69223 7.00005 7 7.00005C6.07174 7.00005 5.1815 6.6313 4.52513 5.97493C3.86875 5.31855 3.5 4.42831 3.5 3.50005ZM5.5 3.50005C5.5 3.79672 5.58797 4.08673 5.7528 4.33341C5.91762 4.58008 6.15189 4.77234 6.42597 4.88587C6.70006 4.9994 7.00166 5.02911 7.29264 4.97123C7.58361 4.91335 7.85088 4.77049 8.06066 4.56071C8.27044 4.35093 8.4133 4.08366 8.47118 3.79269C8.52906 3.50172 8.49935 3.20012 8.38582 2.92603C8.27229 2.65194 8.08003 2.41767 7.83335 2.25285C7.58668 2.08803 7.29667 2.00005 7 2.00005C6.60218 2.00005 6.22064 2.15809 5.93934 2.43939C5.65804 2.7207 5.5 3.10223 5.5 3.50005ZM14 13.0001V15.0001H0V13.0001C0 13.0001 0 9.00005 7 9.00005C14 9.00005 14 13.0001 14 13.0001ZM12 13.0001C11.86 12.2201 10.67 11.0001 7 11.0001C3.33 11.0001 2.07 12.3101 2 13.0001H12ZM13.95 9.00005C14.5629 9.47678 15.064 10.0819 15.4182 10.7729C15.7723 11.4639 15.9709 12.2241 16 13.0001V15.0001H20V13.0001C20 13.0001 20 9.37005 13.94 9.00005H13.95Z" /></svg>
                  Bonus program
                </button>
              </li>
              <li>
                <a href="https://swapcase.io/">
                  <svg viewBox="0 0 16 15" className="icon">
                    <path fillRule="evenodd" clipRule="evenodd" d="M7 7H0V0L2.79289 2.79289L3.85355 1.73222C4.24408 1.3417 4.87724 1.3417 5.26776 1.73222C5.65829 2.12275 5.65829 2.75591 5.26776 3.14644L4.2071 4.2071L7 7ZM15.2678 7.73224H8.26776L11.0607 10.5251L9.99999 11.5858C9.60947 11.9763 9.60947 12.6095 9.99999 13C10.3905 13.3905 11.0237 13.3905 11.4142 13L12.4749 11.9393L15.2678 14.7322V7.73224Z" />
                  </svg>
                    Swap CASE
                </a>
              </li>
            </ul>                    
          </div>
          <div className="nav-right">
            <div className="rank-info">
              <div>Rank </div>
              <div><span id="rank_info">{validData ? rankList[rank].toUpperCase(): "NO RANK"}</span> - <span id="cps_info">{validData ? csp: "0.00"}</span> <span>CSP</span></div>
            </div>
            <Dropdown isOpen={dropdownOpen} toggle={toggle}>
              <DropdownToggle
                style={{ cursor: 'pointer' }}
                tag="div"
                data-toggle="dropdown"
                aria-expanded={dropdownOpen}
              >
              <div className="user-info">
                <ModifiedJazzicon classNAme="user-avatar" address={wallet} />
                <div className="user-name">{wallet.slice(0,6)+'...'}</div>
                <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.896 1L3.94807 4L1.00015 1" stroke="#E5E5E5"/>
                </svg>
              </div>
              </DropdownToggle>
              <DropdownMenu right className="mt-2">
                  <DropdownItem text>Manage Wallet</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem onClick={() => dispatch(openModal())}>Connect</DropdownItem>
                  <DropdownItem style={{color: 'red'}} onClick={() => logout(provider, dispatch)}>Logout</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;