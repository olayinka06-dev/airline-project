"use client";
import React, { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";
import Link from "next/link";
import OceanFreightDetail from "@/components/service_component/OceanFreight";
import RoadFreightDetail from "@/components/service_component/RoadFreight";
import TrainFreightDetail from "@/components/service_component/TrainFreight";
import CustomsClearanceDetail from "@/components/service_component/CustomClearanceFreight";
import WarehouseSolutionsDetail from "@/components/service_component/WareHousing";
import AirFreight from "@/components/service_component/AirFreight";

const ServiceDetail = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease",
    });
  }, []);
  return (
    <div className="container py-5">
      <div className="py-5">
        {/* <a
          className="text-text-orange flex items-center text-uppercase"
          href="serve"
        >
          <FaArrowLeft /> Back to Services
        </a> */}
        <AirFreight/>
        <OceanFreightDetail/>
        <RoadFreightDetail/>
        <TrainFreightDetail/>
        <CustomsClearanceDetail/>
        <WarehouseSolutionsDetail/>
      </div>
    </div>
  );
};

export default ServiceDetail;
