import { getInvestableProperties } from "../index";

it("getInvestableProperties should return an object containing an array of properties", async () => {
  const response = await getInvestableProperties("some parent region");
  expect(Object.keys(response)).toContain("properties");

  const { properties } = response;
  expect(properties).not.toBeUndefined();
  expect(properties.length).toBeGreaterThanOrEqual(0);
});
