import { getChildProperties } from "../index";

it("should return a single property for parent 'immo capital'", async () => {
  const { properties } = await getChildProperties("immo capital");
  expect(properties).toHaveLength(1);
  expect(properties).toContainEqual({
    address: "immo uk",
    region: "immo capital"
  });
});

it("should not return descendents of sub-regions", async () => {
  const { properties } = await getChildProperties("immo global");
  expect(properties).toHaveLength(0);
});
