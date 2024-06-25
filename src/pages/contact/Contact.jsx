import React from "react";
import Layout from "../layout/Layout";
import style from "./contact.module.css";
const Contact = () => {
  return (
    <Layout>
      <div className={style.container}>
        This is a project I wrote to master the redux toolkit. if you have a
        suggestion &nbsp;
        <a href="mailto:bayram.behbudov@gmail.com">Send me mail</a>
      </div>
    </Layout>
  );
};

export default Contact;
