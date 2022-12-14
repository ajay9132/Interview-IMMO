import {
  getAllRegions,
  getPropertiesByRegion,
  getInvestableRegions
} from "./src/api";

/**
 * Do not modify this function signature.
 *
 * Stage 1
 *
 * @param {string} top_level_region - The region that we want to view properties for.
 * @returns {Promise<{properties: Property[]}>}
 */
async function getChildProperties(top_level_region) {
  const response = await getPropertiesByRegion(top_level_region);
  return response;
}

const validateParent = (region) => {
  return region.parent.includes("immo global");
};

/**
 * Do not modify this function signature.
 *
 * Stage 2
 *
 * @param {string} top_level_region - The region that we want to view properties for.
 * @returns {Promise<{properties: Property[]}>}
 */
async function getAllProperties(top_level_region) {
  const response = await getAllRegions();
  // console.log(`response values:`, response.regions);
  const regions = response.regions.filter(validateParent);
  const result = [];
  for (let i = 0; i < regions.length; i++) {
    const properties = await getPropertiesByRegion(regions[i].name);
    result.push(properties);
  }
  console.log("test", result);

  // console.log(check);

  // console.log(response.regions.filter(validateParent));

  return result;
}

/**
 * Do not modify this function signature.
 *
 * Stage 3
 *
 * @param {string} top_level_region - The region that we want to view investable properties for.
 * @returns {Promise<{properties: Property[]}>}
 */
async function getInvestableProperties(top_level_region) {
  return {
    properties: [
      {
        // some property
      },
      {
        // another property
      }
    ]
  };
}

export { getChildProperties, getAllProperties, getInvestableProperties };
