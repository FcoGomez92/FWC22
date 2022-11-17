import "../styles/globals.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { UserContextProvider } from "../context/UserContext";

function MyApp({ Component, pageProps }) {
  return (
    <UserContextProvider>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </UserContextProvider>
  );
}

export default MyApp;
