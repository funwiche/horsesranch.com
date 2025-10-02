import products from "@/resources/products.json";
export const useFeatured = () =>
  useState("featured", () =>
    products
      .slice()
      .sort(() => Math.random() - 0.5)
      .slice(0, 12)
  );
