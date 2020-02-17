// import React from "react";
// import {
//   render,
//   cleanup,
//   fireEvent,
//   waitForElement
// } from "@testing-library/react";
// import moxios from "moxios";
// import App from "./App";


// describe("<App />", () => {

//   beforeEach(() => {
//     moxios.install();
//     moxios.stubRequest(
//       "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/", {
//         status: 200,
//         response: [
//         { id: 1, name: "Fred Flinston", img_src: "fred.jpg" },
//         { id: 2, name: "Wilma Flinston", img_src: "wilma.jpg" }
//       ]
//       }
//     );
//   })

//   afterEach(cleanup);

//   test("should show button", async () => {
//     const { getByText, getByTestId, getAllByTestId } = render(<App />);

//     expect(getByTestId("section").children).toHaveLength(1);
//     fireEvent.click(getByText("02/27/17"));
//     const images = await waitForElement(() => getAllByTestId("section-images"));

//     // moxios.wait( () => {
//     //   // const images = await waitForElement(() => getAllByTestId("section-images"));
//     //   expect(getAllByTestId("section-images")).toHaveLength(2);
//     //   done();
//     // })
//   });
// });
