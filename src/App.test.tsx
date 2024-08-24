import { render } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  test("renders work in progress", async () => {
    const app = render(<App />);
    expect(app.queryByText("Work in progress")).not.toBe(null)
  });

});