import "./App.css";
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
            </Switch>
          </Provider>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
