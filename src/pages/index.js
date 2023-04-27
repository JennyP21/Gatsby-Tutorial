import React from "react";
import Layout from "../components/Layout";
import * as styles from "../styles/home.module.css";
import { Link, graphql } from "gatsby";
import Img from "gatsby-image";

export default function Home({ data }) {
  const banner = data.file.childImageSharp.fluid;
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>UX designer & web developer basd in Vancouver.</p>
          <Link className={styles.btn} to="/projects">
            My Portfolio Projects
          </Link>
        </div>
        <Img fluid={banner} />
      </section>
    </Layout>
  );
}
export const query = graphql`
  query Banner {
    file(relativePath: { eq: "banner.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
