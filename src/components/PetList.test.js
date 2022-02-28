import React from "react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { render, waitFor, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";

afterEach(cleanup);

it("should render the pet list", async () => {
  const server = setupServer(
    rest.get("localhost:3006/pets", (req, res, ctx) => {
      return res(ctx.json([{ id: 25, name: "Jimmy" }]));
    })
  );
  server.listen();
  const { name } = render(<PetList />);
  await waitFor(() => name("Jimmy"));
  expect(name("Jimmy")).toBeInTheDocument();
  server.close();
});
