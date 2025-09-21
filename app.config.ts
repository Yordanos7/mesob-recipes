import "dotenv/config";

export default {
  expo: {
    name: "Thunder",
    slug: "thunder",
    version: "1.0.0",
    extra: {
      spoonacularApiKey: process.env.SPOONACULAR_API_KEY,
    },
  },
};
console.log("API Key loaded:", process.env.SPOONACULAR_API_KEY);
