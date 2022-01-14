import './App.css';
import { React, useState, createContext } from "react";
import HomeNavigator from './navigation/HomeNavigator';
import BoxNavigator from './navigation/BoxNavigator';
import MyPageNavigator from './navigation/MyPageNavigator';
import NotFound from './navigation/NotFound';
import { makeStyles } from '@mui/styles';
import { Icon } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { grey, red } from '@mui/material/colors';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';

export const BoxContext = createContext();

const useStyles = makeStyles((theme) => ({
  container: {
      display: 'flex',
      margin: "0 auto",
      alignItems: "center",
      height: "100%",
      flexDirection: 'column',
      overflowY: "hidden",
      justifyContent: "space-between",
  },
  header: {
    backgroundColor: "#F0C75A",
    width: "100%",
    display: 'flex',
    justifyContent: "space-between",
    height: "7.5%",
    // height: "60px",
  },
  logo: {
    fontSize: "40px",
    color: "white",
  },
  empty: {
    width: "60px",
    height: "60px",
  },
  img: {
    width: "60px",
    height: "60px",
    paddingTop: "5px",
  },
  navigation: {
    backgroundColor: "#F0C75A",
    width: "100%",
    display: 'flex',
    justifyContent: "space-around",
    height: "7.5%",
    // height: "70px",
  },
  icon: {
    width: "50px",
    height: "50px",
    paddingTop: "5px", 
  }
}));

const ROUTER_BASENAME =
  process.env.NODE_ENV === 'development' ? '/' : '/sumaco-app';

const App = () => {
  const classes = useStyles();
  const [ boxes, setBoxes ] = useState();
  const [ selectNav, setSelectNav ] = useState(1);
  const [ notificationsP, setNotificationsP ] = useState([]);
  const [ notificationsG, setNotificationsG ] = useState([]);
  const [ topImages, setTopImages ] = useState([]);
 
  const clickNav = (num) => {
    switch (num) {
      case 1:
        setSelectNav(1);
        break;
      case 2:
        setSelectNav(2);
        break;
      case 3:
        setSelectNav(3);
        break;
    }

    }
  return (
    <div className={classes.container}>
      <BoxContext.Provider value={{ boxes }}>
        <div className={classes.header}>
          <div className={classes.empty}></div>
          <div className={classes.logo}>sumaco</div>
          <div className={classes.img}>
            <NotificationsIcon sx={{ fontSize: 45, color: grey[100] }} />
          </div>
        </div>
        {/* <BrowserRouter basename={process.env.PUBLIC_URL}> */}
        <BrowserRouter basename={ROUTER_BASENAME}>
          <Routes>
            {/* <Route exact path="/" element={<HomeNavigator />}> */}
            {/* <Route exact path="/sumaco-app" element={<HomeNavigator />}> */}
            {/* <Route exact path="/sumaco-app" element={<HomeNavigator />} basename={process.env.PUBLIC_URL}> */}
            <Route exact path="/" element={<HomeNavigator />} basename={process.env.PUBLIC_URL}>
            </Route>
            {/* <Route path="/sumaco-app/box" element={<BoxNavigator />}> */}
            <Route path="/box" element={<BoxNavigator />}>
            </Route>
            {/* <Route path="/sumaco-app/mypage" element={<MyPageNavigator />}> */}
            <Route path="/mypage" element={<MyPageNavigator />}>
            </Route>
            <Route element={<NotFound />}>
            </Route>
          </Routes>
          <nav className={classes.navigation}>
            {/* <Link to="sumaco-app/"> */}
            <Link to="/">
            <div className={classes.icon} onClick={()=>{clickNav(1)}}>
              {selectNav === 1 
                ? <HomeIcon sx={{ fontSize: 50, color: red[900] }}/>
                : <HomeIcon sx={{ fontSize: 50, color: grey[900] }}/>
              }
              
            </div>
            </Link>
            {/* <Link to="sumaco-app/box"> */}
            <Link to="/box">
              <div className={classes.icon} onClick={()=>{clickNav(2)}}>
              {selectNav === 2
                ? <Inventory2Icon sx={{ fontSize: 45, color: red[900] }}/>
                : <Inventory2Icon sx={{ fontSize: 45, color: grey[900] }}/>
              }
              </div>
            </Link>
            {/* <Link to="sumaco-app/mypage"> */}
            <Link to="/mypage">
              <div className={classes.icon} onClick={()=>{clickNav(3)}}>
              {selectNav === 3
                ? <AccountBoxIcon sx={{ fontSize: 50, color: red[900] }}/>
                : <AccountBoxIcon sx={{ fontSize: 50, color: grey[900] }}/>
              }
              </div>
            </Link>
          </nav>
        </BrowserRouter>
      </BoxContext.Provider>
    </div>
  );
}

export default App;
