import React from "react";
import Lottie from "react-lottie";
import loading from "../../styles/lottie/loading.json";
import tick from "../../styles/lottie/tick.json";
import { Col, Container, Row } from "react-bootstrap";
import { useState } from "react";
import FadeIn from "react-fade-in";

export const Loader = ({ show }) => {
  const [done, setDone] = useState(false);
  console.log(show);
  React.useEffect(() => {
    let timeout = setTimeout(() => setDone(true), 2000);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loading,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const defaultOptions2 = {
    loop: false,
    autoplay: true,
    animationData: tick,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      <FadeIn>
        <div className={`loader bg-light align-items-center`}>
          {!done ? (
            <>
              <Lottie options={defaultOptions} height={120} width={120} />
            </>
          ) : (
            <Lottie options={defaultOptions2} height={120} width={120} />
          )}
        </div>
      </FadeIn>
    </>
  );
};
