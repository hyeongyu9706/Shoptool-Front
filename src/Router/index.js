import React, { Component } from "react";
import {  Route,  Switch } from "react-router-dom";
import Pages from "./pages.js";





class RouterWrapper extends Component {

  render() {
    return (
      <>
          <Switch>
            {Pages().map((item) => {
              return (
                <Route
                  key={item.path}
                  exact={item.exact}
                  path={item.path}
                  sensitive={true}
                  component={item.component}
                ></Route>
              );
            })}
     
          </Switch>    
      </>
    );
  }
}



export default RouterWrapper;

