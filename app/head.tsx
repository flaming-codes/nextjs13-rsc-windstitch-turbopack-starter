import { NextSeo } from "next-seo";

export default function Head() {
  return (
    <>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <NextSeo
        themeColor="#363b4b"
        title="Welcome"
        titleTemplate="%s | wild three dee"
      />
    </>
  );
}
