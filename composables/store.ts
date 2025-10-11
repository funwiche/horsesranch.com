import products from "@/resources/products.json";
export const useFeatured = () =>
  useState("featured", () =>
    [...products.filter((el) => el.category == "Horses")]
      .slice()
      .sort(() => Math.random() - 0.5)
      .slice(0, 12)
  );
