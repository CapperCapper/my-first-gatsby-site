import * as React from "react";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";

//without this line, CSSPlugin and AttrPlugin may get dropped by your bundler...
// const plugins = [TweenMax];

import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";

// markup
const IndexPage = () => {
  const headerRef = useRef(null);

  useEffect(() => {
    gsap.from(headerRef.current, {
      autoAlpha: 0,
      ease: "none",
      delay: 1,
    });
  }, []);

  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="Sam as the Hulk"
        src="../images/hulk-sam.png"
        ref={headerRef}
      />
    </Layout>
  );
};

export default IndexPage;
