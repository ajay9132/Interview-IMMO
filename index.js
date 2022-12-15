import {
  getAllRegions,
  getPropertiesByRegion,
  getInvestableRegions,
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

const validateParent = (topLevelRegions, currentRegion, _, regions) => {
  let parent = currentRegion.parent;
  while (parent && parent != "") {
    if (topLevelRegions.indexOf(parent) != -1) return true;
    parent = regions.find((r) => r.name == parent)?.parent;
  }
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

  const regions = response.regions.filter(
    validateParent.bind(null, [top_level_region])
  );

  const result = await getPropertiesByRegion(
    regions.map((r) => r.name).join(",")
  );

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
  const { properties } = await getAllProperties(top_level_region);
  const response = await getAllRegions();
  const investable = await getInvestableRegions();
  const investableRegions = [
    ...investable.regions,
    ...response.regions
      .filter(validateParent.bind(null, investable.regions))
      .map((r) => r.name),
  ];
  return {
    properties: properties.filter(
      (p) => investableRegions.indexOf(p.region) != -1
    ),
  };
}

export { getChildProperties, getAllProperties, getInvestableProperties };
