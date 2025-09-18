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
