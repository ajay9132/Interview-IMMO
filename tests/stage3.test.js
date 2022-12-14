import { getInvestableProperties } from "../index";

it("should return 3 investable properties for parent 'immo global'", async () => {
  const { properties } = await getInvestableProperties("immo global");
  expect(properties).toHaveLength(3);
  expect(properties).not.toContainEqual({
    address: "immo uk",
    region: "immo capital"
  });
  expect(properties).not.toContainEqual({
    address: "1 terrible street",
    region: "ireland"
  });
  expect(properties).not.toContainEqual({
    address: "Schallstrasse 4",
    region: "immo notinvestable"
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
});
