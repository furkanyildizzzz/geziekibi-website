"use client";

import * as animationData from "../../../data/animationData.json";
import { useLottie } from "lottie-react";

const BeeLoading = () => {
  const defaultOptions = {
    animationData: animationData,
    loop: true,
    style: { width: "200px", height: "200px" },
  };

  const { View } = useLottie(defaultOptions);

  //   return (
  //     <>
  //       <div className="">
  //         <div className="w-full">{View}</div>
  //       </div>
  //     </>
  //   );
  return <div className="flex items-center justify-center">{View}</div>;
};

export default BeeLoading;
