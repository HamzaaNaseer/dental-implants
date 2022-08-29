import Head from "next/head";
import Contact1 from "../components/Contact/Contact1";
import Footer2 from "../components/Footer/Footer2";
import Navbar from "../components/Header/Navbar";
import Hero1 from "../components/Hero/Hero1";
import Hero2 from "../components/Hero/Hero2";
import Service1 from "../components/Service/Service1";
import { adminPath } from "../utils/constants";
import {
  contactJSON,
  heroJSON,
  servicesJSON,
  footerJSON,
} from "../utils/jsonData";

export default function Home({ heroJSON, servicesJSON, contactJSON }) {
  return (
    <>
      <Head>
        <title>
          Dental Implant Solutions | Walnut Creek Dental Implant | Implant
          Dentist
        </title>
      </Head>

      {/* <Hero1 data={hero && hero?.hero[0]} /> */}
      <Hero2 data={heroJSON} />
      <Service1 data={servicesJSON} />
      <Contact1 data={contactJSON} />
    </>
  );
}

export async function getStaticProps(context) {
  //const hero = await (await fetch(`${adminPath}/hero1?populate=deep`)).json();

  return {
    props: {
      //hero: hero?.data?.attributes || null,
      heroJSON,
      servicesJSON,
      contactJSON,
      footerJSON,
    },
  };
}
