import logo from "./logo.svg";
import "./App.css";
import AppBar from "./components/AppBar";
import Banner from "./components/Banner";
import Menu from "./components/Menu";
import PickoftheWeek from "./components/PickoftheWeek";
import Comments from "./components/Comments";

function App() {
  return (
    <>
      <AppBar />
      <Banner />
      <Menu/>
      <PickoftheWeek/>
      <Comments/>
      <div className="text-center my-3 text-primary small">Copyright 2023-2024</div>
      <div className="text-left my-3 text-primary normal"><p>Address</p> <p>SVS PIZZA 212 Kudi Street Somur Karur - 639114</p> <p>Contact Number:9080735309</p> <p>Email : svspizzas@gmail.com</p></div>
    </>
  );
}

export default App;
