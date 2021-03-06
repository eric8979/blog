import React from "react"
import Layout from "../components/Layout"
import { graphql, Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
// styles
import * as styles from "../styles/about.module.scss"

export default function about({ data }) {
  const image = getImage(data.file)

  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.title}>
          <h2>Welcome!</h2>
          <GatsbyImage image={image} alt={"banner2"} />
        </div>

        <div className={styles.description}>
          <div>
            <p>
              I am a University Student major in Computer Engineering. I do
              personal projects and post them on GitHub. I love learning new
              things, so it's always fun to learn new languages and frameworks
              for my projects. I haven't decided on a field to focus on yet, but
              since I have many ideas that require a website/app, I have a skill
              set of a full-stack developer (specifics down below).
            </p>
          </div>
          <ul>
            <li>
              <strong>Language:</strong> JavaScript/TypeScript, Python, graphQL,
              C++, (Scss)
            </li>
            <li>
              <strong>Tool:</strong> react, node/express, mongoDB
            </li>
          </ul>
        </div>

        <div className={styles.blogmeta}>
          This blog is built using JAM Stack {"(JavaScript, Gatsby(react))"}
        </div>

        <div className={styles.links}>
          <p>
            GitHub: <a href="https://github.com/eric8979">eric8979</a>
          </p>
          <p>
            twitter:{" "}
            <a href="https://twitter.com/ericthewhale">@ericthewhale</a>
          </p>
          <p>e-mail: hsh048148@gmail.com</p>
        </div>

        <div className={styles.cc}>
          <a
            rel="license"
            href="http://creativecommons.org/licenses/by-nc/4.0/"
          >
            <img
              alt="Creative Commons License"
              src="https://i.creativecommons.org/l/by-nc/4.0/88x31.png"
            />
          </a>
          <br />
          This blog is licensed under a{" "}
          <a
            rel="license"
            href="http://creativecommons.org/licenses/by-nc/4.0/"
          >
            Creative Commons Attribution-NonCommercial 4.0 International License
          </a>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query Logo2 {
    file(relativePath: { eq: "logo2.png" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
  }
`
