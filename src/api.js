// API

/**
 * @typedef {Object} Region
 * @property {string} parent - A parent region name
 * @property {string} name - The name of the region
 */

/**
 * @typedef {object} Property
 * @property {string} address - The full address for a property
 * @property {string} region - The region this property belongs to
 */

/**
 * Returns a promise that returns an object containing an array of region objects,
 * containing a parent region (or "" at the top level), creating a heirarchical tree of
 * data.
 * Responses can take anywhere up to 1.5s to return. This example uses a tree 4 levels
 * deep, but your submission will be tested against a dataset that contains an unknown
 * number of layers (so don't solve for this particular data).
 *
 * @returns {Promise<{regions: Region[]}>}
 */
async function getAllRegions() {
  const regions = {
    regions: [
      { name: "immo global", parent: "" },
      { name: "immo capital", parent: "immo global" },
      { name: "immo investable", parent: "immo global" },
      { name: "immo notinvestable", parent: "immo global" },
      { name: "immo hamburg", parent: "immo investable" },
      { name: "ireland", parent: "*" },
      { name: "*", parent: "" }
    ]
  };

  return regions;
}

/**
 * Returns a promise that returns an object containing an array of property objects,
 * respresenting all of the properties that exist in the regions provided.
 *
 * @param {string} regions - CSV of regions to obtain properties for
 * @returns {Promise<{properties: Property[]}>}
 */
async function getPropertiesByRegion(regions) {
  const properties = [
    { address: "immo uk", region: "immo capital" },
    { address: "immo spain", region: "immo investable" },
    { address: "immo germany", region: "immo investable" },
    { address: "Zimmerstrasse 3", region: "immo hamburg" },
    { address: "Schallstrasse 4", region: "immo notinvestable" },
    { address: "1 terrible street", region: "ireland" }
  ];

  let properties_to_return = [];

  const array_of_regions = regions.split(",");
  properties_to_return = array_of_regions.flatMap((region) =>
    properties.filter((record) => record.region === region)
  );

  return { properties: properties_to_return };
}

/**
 * Returns a promise that returns an object containing an array of region strings,
 * representing the regions that IMMO is currently investing in.
 *
 * @returns {Promise<{string[]}>}
 */
async function getInvestableRegions() {
  const investable_regions = {
    regions: ["immo investable"]
  };

  return investable_regions;
}

export { getAllRegions, getPropertiesByRegion, getInvestableRegions };
