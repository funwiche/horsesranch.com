import horses from "@/resources/horses.json";
export const useFeatured = () =>
  useState("featured", () =>
    [...horses]
      .slice()
      .sort(() => Math.random() - 0.5)
      .slice(0, 12),
  );
