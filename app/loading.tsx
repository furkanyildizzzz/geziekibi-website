import BeeLoading from "@/components/layout/loading/BeeLoading";
import React from "react";

const Loading = () => {
  return (
    <div
      className="loader-wrapper flex items-center justify-center min-h-screen"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "white",
        zIndex: 999999,
      }}
    >
      <BeeLoading />
    </div>
  );
};

export default Loading;
