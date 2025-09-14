import { useState } from "react";
// import "./index.css"
// import ArrayContent from "./components/ArrayContent";
// import ArrayObject from "./components/ArrayObject";
// import Counter from "./components/Counter";
// import Greet from "./components/Greet";
// import Header from "./components/Header";
// import ObjectContent from "./components/ObjectContent";
// import Footer from "./components/Footer";
// import MainContent from "./components/MainContent";
// import ProductInfo from "./components/ProductInfo";
// import Person from "./components/Person";
// import Product from "./components/Product"
// import Weather from "./components/weather";
// import UserStatus from "./components/userStatus"
// import Profile from "./components/Profile";
// import ShoppingList from "./components/ShoppingList";
// import TodoList from "./components/TodoList";
// import OneComponent from "./components/OneComponent"
// import TwoComponent from "./components/TwoComponent"
// import MoreStateEg from "./components/MoreStateEg"
import PropsDrillA from "./components/PropsDrillA";
import PropsDrillB from "./components/PropsDrillB";
import PropsDrillC from "./components/PropsDrillC";
import { createContext } from "react";
import TimerRef from "./components/TimerRef"
import CopyInput from "./components/copyInput";
import Switcher from "./components/Switcher";
import UseEffect from "./components/UseEffect";
import UserCprofile from "./components/UserCprofile";
import { UserProvider } from "./components/UseContext";
import UpdateUserContext from "./components/UpdateUserContext";
import UseReducer from "./components/UseReducer";
import CountingReducer from "./components/CountingReducer";
import UseRef from "./components/UseRef";

export const Data = createContext();
export const Data1 = createContext();

const App = () => {
  const name = "Maryam";
  const age = 20;
  // const [count, setCount] = useState(0)
  return (
    <>
      <TimerRef/>
    {/* <UseRef/> */}
      {/* <UseReducer/> */}
      {/* <CountingReducer/> */}
      {/* <UserProvider>
          <UserCprofile/>
          <UpdateUserContext/>
      </UserProvider> */}

      {/* <Data.Provider value={name}>
        <Data1.Provider value={age}>
          <UserCprofile/>
          <PropsDrillA />
          <PropsDrillB />
          <PropsDrillC />
        </Data1.Provider>
      </Data.Provider> */}
    </>
  );
};
export default App;

// {/* <Person name = "AYO" age = "24yrs" hobbies = {["reading", "coding"]}/>
//  <Product name = "indomie" price = {20000}/> */}
//   {/* <Weather />
//   <ProductInfo/>
//   <MainContent/>
//   <Footer/> */}
//   {/* <UserStatus loggedIn = {true} isAdmin = {true}/> */}
//   {/* <Greet timeOfDay = "afternon" /> */}
//           {/* <Header /> */}
//   {/* <Profile/>
//   <Counter/>
//   <TodoList/>
//   <ShoppingList/> */}

//   {/* <ArrayContent/>
//   <ObjectContent/>
//   <ArrayObject/> */}

//   {/* <OneComponent count = {count} onClickHandler = {() => setCount(count + 1)}/>
//   <TwoComponent count = {count} onClickHandler = {() => setCount(count - 1)}/> */}
//   {/* <MoreStateEg/> */}
//   {/* <CopyInput/> */}
//   {/* <Switcher/> */}
//   {/* <UseEffect/> */}
//             // <PropsDrillA name = {name}/>

//);
//};
