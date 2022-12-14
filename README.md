# Software Engineer development challenge

In this exercise, you're given a few functions simulating API endpoints.

Your task is to use them to write a series of functions that will retrieve a list of properties, each with slightly different requirements.

There are three stages to the challenge, for which the requirements are given in `REQUIREMENTS.md`. Each stage has some associated tests (`stage{1-3}.test.js`) that should pass before you move on to the next stage.

Please write the most performant but readable code you can **(assuming the code could be deployed to production)** in `index.js` without modifying any of the API functions in `src/api.js` or the signature of any of the functions in `index.js`. (You are allowed to add your own helper functions in `index.js` though.)

## `api.js`

You have been provided with a mock `api` that provides three functions for use - pretend these are your interface to a RESTful API.

### `getAllRegions`

Returns a promise that returns an object containing an array of region objects, with each region containing the following properties:

| Property | Type   | Description                                                                         |
| -------- | ------ | ----------------------------------------------------------------------------------- |
| `name`   | string | The region name                                                                     |
| `parent` | string | The name of the region's parent region (if no parent, this will be an empty string) |

### `getPropertiesByRegion`

Returns a promise that returns an object containing an array of property objects, representing all of the properties that exist in the regions provided.

#### Params

| Property | Type   | Description                             | Example                    |
| -------- | ------ | --------------------------------------- | -------------------------- |
| regions  | string | CSV of regions to obtain properties for | `"london,bermuda,glasgow"` |

#### Response

| Property  | Type   | Description                                     |
| --------- | ------ | ----------------------------------------------- |
| `region`  | string | The name of the region this property belongs in |
| `address` | string | The full address for this property              |

### `getInvestableRegions`

Returns a promise that returns an object containing an array of strings, representing the regions that IMMO is currently investing in.
