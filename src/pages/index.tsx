import Layout from "@theme/Layout";
import React from "react";
import {
  HomeHeader,
  HomeLogoSL,
  HomeLogoNP,
  HomeLogoCD,
  Laptop,
  SourceCode,
  Tablet,
} from "@site/static/img/home";
import BrowserOnly from "@docusaurus/BrowserOnly";
import { translate } from "@docusaurus/Translate";

function HomepageHeader() {
  return (
    <img src={HomeHeader} height={"200px"} style={{ objectFit: "cover" }} />
  );
}

const Docs = [
  {
    img: Tablet,
    label: translate({ id: "home.app", message: "How to use Coach app" }),
    path: "/docs/app/installation",
    winPath: "docs/app/installation",
  },
  {
    img: Laptop,
    label: translate({ id: "home.admin", message: "How to use Admin pannel" }),
    path: "/docs/admin/accessing",
    winPath: "docs/admin/accessing",
  },
  {
    img: SourceCode,
    label: translate({
      id: "home.code",
      message: "Developer documentation",
    }),
    path: "/docs/code/intro",
    winPath: "docs/code/intro",
  },
];

export default function Home(): JSX.Element {
  return (
    <Layout
      title={translate({ id: "home.title", message: "Home" })}
      description={translate({
        id: "home.description",
        message: "Coach APP SL Documentation",
      })}
    >
      <HomepageHeader />
      <BrowserOnly>
        {() => (
          <img
            src={
              window.location.href.includes("/np/")
                ? HomeLogoNP
                : window.location.href.includes("/cd/")
                ? HomeLogoCD
                : HomeLogoSL
            }
            style={{
              objectFit: "cover",
              width: "180px",
              alignSelf: "center",
              margin: "24px 0px",
            }}
          />
        )}
      </BrowserOnly>

      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "start",
          justifyContent: "center",
          padding: "24px 0px",
          background: "#F2F4F7",
          gap: "40px",
        }}
      >
        {Docs.map((doc, key) => (
          <div
            key={key}
            style={{
              cursor: "pointer",
              display: "flex",
              width: "150px",
              flexDirection: "column",
              alignItems: "center",
            }}
            onClick={() => (window.location.href = doc.winPath)}
          >
            <div
              style={{
                background: "white",
                width: "100%",
                height: "150px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "16px",
              }}
            >
              <img
                src={doc.img}
                style={{
                  objectFit: "cover",
                  width: "70px",
                  alignSelf: "center",
                }}
              />
            </div>

            <h2
              style={{
                fontSize: "18px",
                fontWeight: 500,
                marginTop: "8px",
                textAlign: "center",
                padding: "0px 10px",
              }}
            >
              {doc.label}
            </h2>
          </div>
        ))}
      </div>
    </Layout>
  );
}
