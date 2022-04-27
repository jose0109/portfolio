import React from "react";
import Feature from "./Feature";
import styles from "./features.module.css";

const Features = () => {
  const devTools = [
    "Atom",
    "Bitbucket",
    "Bootstrap",
    "Bulma",
    "Codekit",
    "Codepen",
    "Github",
    "Gitlab",
    "Terminal",
  ];

  const devToolsList = devTools.map((item) => <div>{item}</div>);
  const icons = [
    <i class="bx bx-code-block"></i>,
    <i class="bx bx-code-block"></i>,
    <i class="bx bx-code-block"></i>,
  ];

  return (
    <div className={styles.features}>
      <Feature
        icon={icons[0]}
        title="Front-End Web Developer"
        mainDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet posuere nunc. Morbi rutrum tortor mi, a vulputate nisi finibus in."
        firstSubtitle="My Languages"
        firstDescription="HTML, CSS, JS, Bootstrap, ReactJS"
        secSubtitle="Dev Tools"
        secDescription={devToolsList}
      />
      <Feature
        icon={icons[1]}
        title="Front-End Web Developer"
        mainDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet posuere nunc. Morbi rutrum tortor mi, a vulputate nisi finibus in."
        firstSubtitle="My Languages"
        firstDescription="HTML, CSS, JS, Bootstrap, ReactJS"
        secSubtitle="Dev Tools"
        secDescription={devToolsList}
      />
      <Feature
      icon={icons[2]}
        title="Front-End Web Developer"
        mainDescription="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet posuere nunc. Morbi rutrum tortor mi, a vulputate nisi finibus in."
        firstSubtitle="My Languages"
        firstDescription="HTML, CSS, JS, Bootstrap, ReactJS"
        secSubtitle="Dev Tools"
        secDescription={devToolsList}
      />
    </div>
  );
};

export default Features;
