import { render, screen } from "@testing-library/react";
import Pet from "./Pet";

describe("Pet", () => {
  test("Pet must have src = of a dog", () => {
    render(<Pet />);
    const pet = screen.getByRole("img");
    expect(pet).toHaveAttribute(
      "src",
      "https://images.unsplash.com/photo-1611003228941-98852ba62227?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmFieSUyMGRvZ3xlbnwwfHwwfHw%3D&w=1000&q=80"
    );
  });
});
