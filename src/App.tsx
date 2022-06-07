import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
  Redirect,
} from 'react-router-dom';
import "./App.css";
import { createGlobalStyle } from "styled-components";
import { BackgroundColor, TextColor } from "./utils/theme";
import { useUser } from './components/Auth/useUser';
import React, {createContext, useEffect, useState } from 'react';
import { UserContextInterface } from './components/Auth/types';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import NotFoundPage from './components/404';
import Home from './pages/home';
import UserProfile from './components/UserProfile';
import CoursePage from './components/CoursePage';
import ChapterPage from './components/ChapterPage';
import CreateCoursePage from './components/CreateCoursePage';
import { SnackbarProvider } from 'notistack';
import WelcomePage from './components/WelcomePage';

const GlobalStyle = createGlobalStyle`
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body, html, #root {
  height: 100%;
  font-family: -apple-system, Ubuntu , BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  background-color: ${BackgroundColor};
  color: ${TextColor};
}
`;

//@ts-ignore
export const UserContext = createContext<UserContextInterface>(null);

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const context = useUser();

  let token = localStorage.getItem("JWTToken");
  if (token != null) {
    if (!context.jwt) {
      context.setJwt(token); //@ts-ignore
      context.setUserInfo(JSON.parse(localStorage.getItem("userInfo")));
    }
  }

  return (
    <>
      <GlobalStyle/>
      <SnackbarProvider maxSnack={3}>
      <UserContext.Provider value={context as UserContextInterface}>

        {console.log("LoggedIn =",!!context.jwt)}
        {context.jwt != "" && context.jwt != null ? (
          // registered users
          <>
           <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/user/:id" component={UserProfile}/>
            <Route path="/course/create" component={CreateCoursePage}/>
            <Route path="/course/:id" component={CoursePage}/>
            <Route path="/chapter/:id" component={ChapterPage}/>
            <Route exact path="/login"><Redirect to=""/></Route>
            <Route exact path="/signup"><Redirect to=""/></Route>
            <Route exact path="*" component={NotFoundPage}/>
          </Switch>
          </>
          ):(
            // not registered users
            <>
              <Switch>
                <Route exact path="/" component={WelcomePage}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/signup" component={Signup}/>
                {/* <Route exact path="*" component={Login}/> */}
                <Route exact path="*"><Redirect to="/login"/></Route>
              </Switch>
            </>
          )
        }
      </UserContext.Provider>
      </SnackbarProvider>
    </>
  );
}

export default App;
