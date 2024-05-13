import "../styles/globals.css";

//INTRNAL IMPORT
import { NavBar, Footer } from "../components/componentsindex";

const MyApp = ({ Component, pageProps }) => (
  <div>
      <NavBar />
      <Component {...pageProps} />
  </div>
);

export default MyApp;
