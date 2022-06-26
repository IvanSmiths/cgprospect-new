/* eslint-disable @next/next/no-img-element */
import Search from "../components/Search";
import Head from "next/head";

export default function Home() {
  const schemaData = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "CG Prospect",
      url: "https://www.cgprospect.com/",
      potentialAction: {
        "@type": "SearchAction",
        target: "https://www.cgprospect.com/search?query={search_term_string}",
        "query-input": "required name=search_term_string",
      },
      sameAs: [
        "https://www.instagram.com/cgprospect/",
        "https://www.facebook.com/CG-Prospect-106271838337510",
        "https://www.artstation.com/cgprospect",
        "https://www.pinterest.com/cgprospect/",
        "https://www.patreon.com/cgprospect",
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      url: "https://www.cgprospect.com/",
      logo: "https://www.cgprospect.com/images/logo.png",
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Home",
      description: "Free 8K Textures, to put in your projects.",
      publisher: {
        "@type": "Person",
        name: "Ivan Smiths",
      },
      license: "http://creativecommons.org/licenses/by-nc-sa/3.0/us/deed.en_US",
    },
  ];

  return (
    <>
      <Head>
        <title>title</title>
        <meta name="description" content="desc" />
        <meta name="msvalidate.01" content="BDB55CCC263678714F8D543BAAFF6FAC" />
        <meta
          name="facebook-domain-verification"
          content="a2q750leq99b25u1f9zkjqrszu8t5t"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
        <title>CG Prospect, Free PBR Textures & 3D Models</title>
        <meta
          name="description"
          content="On CG Prospect you can find free 3d models and free textures for your renders, games, and more."
        />

        <meta property="og:url" content="https://www.cgprospect.com/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="CG Prospect, Free PBR Textures & 3D Models"
        />
        <meta
          property="og:description"
          content="Free 8K Textures, to put in your projects."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/deino2cjx/image/upload/v1627848204/nextjs_media/apple-icon-152x152_gbwieu.png"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="cgprospect.com" />
        <meta property="twitter:url" content="https://www.cgprospect.com/" />
        <meta
          name="twitter:title"
          content="CG Prospect, Free PBR Textures & 3D Models"
        />
        <meta
          name="twitter:description"
          content="Free 8K Textures, to put in your projects."
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/deino2cjx/image/upload/v1627848204/nextjs_media/apple-icon-152x152_gbwieu.png"
        />
      </Head>
      <header className="cnt-header-home">
        <h1>
          3D Models, <br />
          8K Textures, <br />
          All for free.
        </h1>
        <Search />
      </header>
    </>
  );
}
