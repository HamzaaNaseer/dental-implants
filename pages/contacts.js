import Head from "next/head";
import React from "react";
import Contact1 from "../components/Contact/Contact1";
import Contact2 from "../components/Contact/Contact2";
import { adminPath } from "../utils/constants";
import { contactJSON } from "../utils/jsonData";

const contacts = ({ contact, contactJSON }) => {
  return (
    <>
    <Head>
      <title>Dental Implants | Contact us</title>
    </Head>
      <Contact1 data={contactJSON} />

      {/* <Contact1 data={contact[0] || null} />
      <Contact2 data={contact[1] || null} /> */}
    </>
  );
};

export default contacts;

export async function getStaticProps(context) {
  //const contact = await (await fetch(`${adminPath}/site?populate=deep`)).json();

  return {
    props: {
      //contact: contact?.data?.attributes?.contact || null,
      contactJSON,
    },
  };
}
