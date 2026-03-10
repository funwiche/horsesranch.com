import horses from "@/resources/horses.json";
import schema from "@/assets/schema";

export const useFeatured = () =>
  useState("featured", () =>
    [...horses]
      .slice()
      .sort(() => Math.random() - 0.5)
      .slice(0, 12),
  );
export const useSeo = ({
  title,
  desc,
  image,
  imageAlt,
  gallery,
  price,

  breadcrumbs = [],
}: any) => {
  const route = useRoute();
  const url = $app.url + route.fullPath;
  const description = desc || $app.desc;
  title = title || $app.title;
  image = image || $app.image;
  imageAlt = imageAlt || $app.name;

  useSeoMeta({
    title,
    description,

    //  Open Graph
    ogTitle: `${title} | ${$app.name}`,
    ogDescription: description,
    ogType: "website",
    ogUrl: $app.url + route.fullPath,
    ogImage: $app.url + image,
    ogImageAlt: imageAlt,
    ogSiteName: $app.name,
    ogLocale: "en_US",

    // Twitter Card
    twitterCard: "summary_large_image",
    twitterTitle: `${title} | ${$app.name}`,
    twitterDescription: description,
    twitterImage: $app.url + image,
    twitterImageAlt: imageAlt,
    // twitterSite:"@versatilehorses"
  });

  useHead({
    link: [{ rel: "canonical", href: url }],
    script: [
      {
        key: "ld-json",
        type: "application/ld+json",
        innerHTML: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            ...schema,
            {
              "@type": "WebPage",
              "@id": `${url}#webpage`,
              url,
              name: title,
              isPartOf: { "@id": `${$app.url}#website` },
              breadcrumb: { "@id": `${url}#breadcrumb` },
              inLanguage: "en",
            },
            {
              "@type": "BreadcrumbList",
              "@id": `${url}#breadcrumb`,
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: $app.url,
                },
                ...(breadcrumbs as any[]).map((el, i) => ({
                  "@type": "ListItem",
                  position: i + 2,
                  name: el.name,
                  item: `${$app.url}${el.path}`,
                })),
              ],
            },
            route.params.slug
              ? {
                  "@type": "Product",
                  "@id": `${url}#product`,
                  name: title,
                  description,
                  image: gallery?.map((img: any) => `${$app.url}${img}`),
                  brand: { "@type": "Brand", name: $app.name },
                  offers: {
                    "@type": "Offer",
                    priceCurrency: "USD",
                    price,
                    availability: "https://schema.org/InStock",
                    url,
                  },
                }
              : null,
          ].filter((el) => el),
        }),
      },
    ],
  });
};
