import Head from "next/head";
import React from "react";
import Service1 from "../components/Service/Service1";
import Service2 from "../components/Service/Service2";
import { adminPath } from "../utils/constants";
import { servicesJSON } from "../utils/jsonData";


const Services = ({ servicesJSON }) => {
  return (
    <>
    <Head>
      <title>Dental Implants | Services</title>
    </Head>
      <Service1 data={servicesJSON} />
      {/* <Service1 data={services?.services[0] || null} />
      <Service2 data={services?.services[1] || null}/> */}
    </>
  );
};

export default Services;

export async function getStaticProps(context) {
  //const services = await (await fetch(`${adminPath}/service1?populate=deep`)).json();

  return {
    props: {
      //services: services?.data?.attributes || null,
      servicesJSON,
    },
  };
}
