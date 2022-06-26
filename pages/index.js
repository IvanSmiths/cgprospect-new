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
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          eum autem quidem eligendi, beatae consequatur blanditiis provident!
          Alias at natus corrupti quaerat id fugit et dolor totam eum, itaque
          dolorum atque repudiandae aliquid provident molestiae voluptatibus
          odio iusto optio officiis earum cupiditate laboriosam! Minima quidem
          asperiores, similique ab hic consequuntur atque totam in, fugit id sed
          quaerat recusandae eius? Corporis obcaecati, cupiditate est nemo
          quaerat quis repudiandae deleniti aut! A possimus, accusamus cumque
          sit voluptate, assumenda iusto eos similique esse quis illo. Nulla,
          autem. Voluptatem eius ab ex enim vitae possimus. Nulla maxime
          delectus sunt qui ab totam accusamus, obcaecati quam nobis neque quo
          quos dolor ipsum asperiores placeat recusandae aperiam aliquid
          mollitia. Dolore reiciendis fuga inventore ad veritatis suscipit
          repellendus cumque neque, corrupti itaque consequatur commodi
          excepturi qui. Earum fugiat tempora cupiditate voluptatibus magnam
          quia vel neque sint eius! Expedita quidem debitis sequi facere
          voluptatem saepe soluta, modi beatae non ab esse ratione voluptatibus,
          pariatur hic perspiciatis deserunt culpa consectetur magni molestiae
          natus. Quas saepe aspernatur atque tempora illo fugiat provident
          cupiditate cum earum expedita. Reiciendis sunt, tempora, amet eius,
          iure cumque rem expedita cum accusamus reprehenderit explicabo? Veniam
          beatae ipsum quisquam omnis nulla saepe dignissimos numquam ducimus,
          ab dolore sit error tempore consequuntur sequi vel dicta sed iste nisi
          quo velit illo aliquid veritatis obcaecati deleniti. Reiciendis labore
          doloremque soluta ut, illo voluptate autem deleniti assumenda facilis
          magnam id harum iure deserunt minima officiis eos modi repellat error?
          Sapiente est sed similique beatae fugiat repudiandae laboriosam
          commodi impedit labore, fuga odio, veniam dolores error minus dolorum
          eius aut cumque ea doloribus molestias. Ea molestiae nihil vero? Fuga
          aspernatur fugiat praesentium quas molestias a molestiae ipsa ratione
          soluta. Laboriosam dicta excepturi accusamus vero maiores eveniet
          labore unde placeat fugit? Ipsam, placeat qui corrupti mollitia vero
          earum libero recusandae alias.
        </p>
      </header>
    </>
  );
}
