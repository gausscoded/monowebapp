import Head from "next/head";
import CustomComponents from "../components/custom/Custom-components";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Monovpn Security </title>
        <meta
          name="description"
          content="Monovpn Security Solution Group"
        />
        <link rel="icon" href="/icon.ico" />
      </Head>
      <CustomComponents />
    </div>
  );
}
