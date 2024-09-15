import React from "react";
import ReactDOM from "react-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App";

ReactDOM.render(
  <Auth0Provider
    domain="dev-zkcgdfrz8a5gv58c.us.auth0.com"
    clientId="9ZXWKN1voplechHB3hgoGoTxtirXntvl"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}>
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);
