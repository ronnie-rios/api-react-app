import { ApolloProvider } from "@apollo/client";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import client from './lib/apolloClient.js';

ReactDOM.createRoot(document.getElementById("root")).render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
