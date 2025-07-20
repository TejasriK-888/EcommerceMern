import React from "react";
import Layout from "../../components/Layout/Layout";
import aboutImg from "../../assets/about.jpg";
import "./About.scss";

const About = () => {
  return (
    <Layout title={"About Us - Love E-Commerce"}>
      <h1 className="ah1">About Us</h1>
      <div className="about">
        <div className="about-left">
          <img src={aboutImg} alt="" />
        </div>

        <div className="about-right">
          <h2>About Love E-Commerce</h2>
          <p>
            Life is beautiful when lived with kindness and purpose, <br />
embracing challenges with courage and grace, <br />
finding joy in small moments and gratitude in all things. <br />
With every step we take, we grow wiser and stronger, <br />
building connections and cherishing memories <br />
that shape who we are and who we become. <br />
Let us walk this journey with open hearts and hopeful minds, <br />
spreading light, love, and understanding wherever we go. <br />
Together we create a better tomorrow
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
