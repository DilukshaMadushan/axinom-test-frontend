import Layout from "./components/Layout";
import MainContainer from "./container/MainContainer";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Layout>
        <MainContainer />
      </Layout>
    </Provider>
  );
}

export default App;
