import "./App.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Navbar from "./component/Navbar";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <main>
      <h1 className="text-3xl font-bold underline">
        Hello world!
        </h1>
      </main>
      <Footer />
    </>
  );
}

export default App;
