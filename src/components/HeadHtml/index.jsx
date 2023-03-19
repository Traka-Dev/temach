import Head from "next/head"

export const HeadHtml = ({
  title = "El Temach",
  description = "Website hecho por la comunidad del temach",
}) => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
  </Head>
)
