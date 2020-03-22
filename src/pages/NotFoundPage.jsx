import React from "react";
import Lottie from "react-lottie";
import notfound from "../commons/assets/animations/notfound.json";

export default function NotFoundPage() {
  return (
    <div className="container">
      <Lottie
        width="100%"
        height={500}
        options={{
          animationData: notfound
        }}
      />
    </div>
  );
}
