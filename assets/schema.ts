import { $app } from "../utils";
export default [
  {
    "@type": "Organization",
    "@id": `${$app.url}#organization`,
    name: $app.name,
    url: $app.url,
    logo: { "@type": "ImageObject", url: `${$app.url}/logo.png` },
  },
  {
    "@type": "LocalBusiness",
    "@id": `${$app.url}#localbusiness`,
    name: $app.name,
    url: $app.url,
    image: $app.image,
    telephone: $app.phone,
    priceRange: "$$$",
    address: { "@type": "PostalAddress", ...$app.location },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:00",
        closes: "18:00",
      },
    ],
    sameAs: [],
  },
  {
    "@type": "WebSite",
    "@id": `${$app.url}#website`,
    url: $app.url,
    name: $app.name,
    publisher: { "@id": `${$app.url}#organization` },
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.horsesranch.com/horses?keyword={search_term_string}",
      "query-input": "required name=search_term_string",
    },
    inLanguage: "en",
  },
];

const product = {
  "@type": "Product",
  "@id":
    "https://www.horsesranch.com/horses/quarter-horses/aiysha-quarter-horse-dappled-buckskin-mare/#product",
  name: "Aiysha Quarter Horse Dappled Buckskin Mare",
  description:
    "Beautiful dappled buckskin Quarter Horse mare available for sale. Well trained, healthy, and suitable for riding and ranch work.",
  image: ["https://www.horsesranch.com/images/aiysha-quarter-horse.jpg"],
  brand: { "@type": "Brand", name: $app.name },
  offers: {
    "@type": "Offer",
    priceCurrency: "USD",
    price: "8700",
    availability: "https://schema.org/InStock",
    url: "https://www.horsesranch.com/horses/quarter-horses/aiysha-quarter-horse-dappled-buckskin-mare",
  },
};
