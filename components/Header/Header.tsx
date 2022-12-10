import Head from "next/head";

interface IHeaderProps {
  description: string;
  title?: string;
  image: string;
}

const Header = ({ description, title, image }: IHeaderProps) => {
  return (
    <Head>
      <title>{(title ? `${title} | ` : "") + "Shen Yien"}</title>
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:title"
        content={(title ? `${title} | ` : "") + "Shen Yien"}
      />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default Header;
