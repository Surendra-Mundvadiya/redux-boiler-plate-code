import React, { Component } from "react";
import Pages from "./screens/pages";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/es/integration/react";
import createStore from "./store";
import CssPropvider from "./styles";
const { store, persistor } = createStore();

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <PersistGate persistor={persistor}>
                    <CssPropvider>
                        <Pages />
                    </CssPropvider>
                </PersistGate>
            </Provider>
        );
    }
}

export default App;
