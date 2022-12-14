import { getAllProperties } from "../index";

it("should return 5 properties for parent 'immo global'", async () => {
  const { properties } = await getAllProperties("immo global");
  expect(properties).toHaveLength(5);
  expect(properties).not.toContainEqual({
    address: "1 terrible street",
    region: "ireland"
  });
  expect(properties).toContainEqual({
    address: "immo uk",
    region: "immo capital"
  });
  expect(properties).toContainEqual({
    address: "immo germany",
    region: "immo investable"
  });
  expect(properties).toContainEqual({
    address: "immo spain",
    region: "immo investable"
  });
  expect(properties).toContainEqual({
    address: "Zimmerstrasse 3",
    region: "immo hamburg"
  });
  expect(properties).toContainEqual({
    address: "Schallstrasse 4",
    region: "immo notinvestable"
  });
});
