import { StaticRouter } from "react-router-dom/server";
import store from "../../utils/store";
import Header from "../Header";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";

test("Logo should load on rendering header", () => {
  //load header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  console.log(header);
});