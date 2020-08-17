import React from "react";
import { Route, Redirect } from "react-router-dom";


//
// What this mean????
//
function querystring(name, url = window.location.href) {
  name = name.replace(/[[]]/g, "\\$&");

  const regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)", "i");
  const results = regex.exec(url);

  // console.log('results: ', results)

  if (!results) {
    return null;
  }
  if (!results[2]) {
    return "";
  }

  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

export default function UnauthenticatedRoute({ component: C, appProps, ...rest }) {
  const redirect = querystring("redirect")
  return (
    <Route
      {...rest}
      render={props =>
        !appProps.isAuthenticated
          ? <C {...props} {...appProps} />
          : <Redirect 
              // to="/" 
              to={redirect === "" || redirect === null ? "/" : redirect}
            />}
    />
  );
}