import { Outlet } from "react-router-dom";
import Navbars from "./NavBarPanel";
import { Provider } from "react-redux";
import store from "../store/store";

const RootLayout = () => {
    console.log("RootLayout",store);
    return (
        <Provider store={store}>
            <div>
                <Navbars />
                <main>
                    <Outlet />
                </main>
            </div>
        </Provider>
    )
}
export default RootLayout;