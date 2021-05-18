import Head from "next/head";

export default function HeadObject({ children }) {
  const title = "CodeHers Hack! 2021";
  const description =
    "On April 3-5, 2021, over 100 female/femme/non-binary students came together virtually for CodeHers Hack!, a beginner-friendly coding event.";
  const keywords = "hack, women in stem, hackathon, coding, beginner";
  const author = "Ella";
  const twitter = "@ella";
  //const image = "/ogimage.png"; // This is your OpenGraph image
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta property="og:url" content="codehers.vercel.app" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {/* <meta property="og:image" content={image} /> */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content={twitter} />
      <meta name="twitter:creator" content={twitter} />
      <link
        rel="preload"
        href="/fonts/GoshaSans/GoshaSans-Bold/ttf"
        as="font"
        crossOrigin=""
      />
      {children}
    </Head>
  );
}
