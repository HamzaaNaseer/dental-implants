import React from "react";
import { adminPath } from "../utils/constants";
import Footer1 from "../components/Footer/Footer1";
import Footer2 from "../components/Footer/Footer2";
import { footerJSON } from "../utils/jsonData";

const Footer = ({ footer, footerJSON }) => {
  return (
    <>
      <Footer2 data={footerJSON} />
      {/* <Footer1 data={footer[0]}/>
        <Footer2 data={footer[0]}/> */}
    </>
  );
};

export default Footer;

export async function getStaticProps(context) {
  //const footer = await (await fetch(`${adminPath}/site?populate=deep`)).json();

  return {
    props: {
      //footer: footer?.data?.attributes?.footer || null,
      footerJSON,
    },
  };
}
