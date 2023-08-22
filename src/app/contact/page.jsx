import ContactInformation from "@/components/entities/ContactInformation";
import HeroBanner from "@/components/entities/HeroBanner";
import React from "react";

const ContactPage = () => {
  return (
    <>
      <HeroBanner
        head={"Contact Us"}
        paragraph={"Get in Touch with Our Team"}
      />
      <ContactInformation />
    </>
  );
};

export default ContactPage;
