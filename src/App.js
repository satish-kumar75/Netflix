import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Body from "./components/Body";
import Browse from "./components/Browse";
import Login from "./components/Login";
import Home from "./pages/Home/Home";
import Header from "./components/Header";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/browse",
          element: <Browse />,
        },
      ],
      errorElement: (
        <div>
          <Header />
          <p>Error.....</p>
        </div>
      ),
    },
  ]);
  return (
    <div className="App">
      <Provider store={appStore}>
        <RouterProvider router={appRouter} />
      </Provider>
    </div>
  );
}

export default App;
