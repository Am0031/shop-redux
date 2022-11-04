import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { setContext } from "@apollo/client/link/context";
import { Provider } from "react-redux";

import Home from "./containers/Home";
import Detail from "./containers/Detail";
import NoMatch from "./containers/NoMatch";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import Success from "./containers/Success";
import OrderHistory from "./containers/OrderHistory";
import Nav from "./components/Nav";
import store from "./utils/store";

const httpLink = createHttpLink({
  uri: process.env.REACT_APP_GRAPHQL || "/graphql",
  credentials: "same-origin",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="App">
          <Provider store={store}>
            <Nav />
            <Switch>
              <Route exact path="/" element={Home} />
              <Route exact path="/login" element={Login} />
              <Route exact path="/signup" element={Signup} />
              <Route exact path="/success" element={Success} />
              <Route exact path="/orderHistory" element={OrderHistory} />
              <Route exact path="/products/:id" element={Detail} />
              <Route component={NoMatch} />
            </Switch>
          </Provider>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
