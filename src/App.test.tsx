import { render } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  test("renders application components", async () => {
    const app = render(<App />);
    expect(app.findByRole("InputArea")).not.toBe(null)
    expect(app.findByRole("Diagram")).not.toBe(null)
  });

});