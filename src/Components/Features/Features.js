import React from "react";
import Feature from "./Feature";
import styles from "./features.module.css";

const Features = () => {
  const frontTools = [
    "VSCode",
    "Bootstrap",
    "Codepen",
    "Github",
    "Terminal",
  ];
  const backTools = [
    "VSCode",
    "MySQL",
    "Django",
    "Github",
  ];

  const personalSkills = [
    "Teamwork",
    "Problem Solving",
    "Leadership",
    "Adaptability",
    "Decision Making",
  ];

  const frontToolsList = frontTools.map((item) => <div>{item}</div>);
  const backToolsList = backTools.map((item) => <div>{item}</div>);
  const personalSkillsList = personalSkills.map((item) => <div>{item}</div>);

  const icons = [
    <i class="bx bx-code-block"></i>,
    <i class='bx bx-user'></i>,
    <i class='bx bx-code'></i>,
  ];

  return (
    <div className={styles.features}>
      <Feature
        icon={icons[0]}
        title="Front-End Web Developer"
        mainDescription="I prefer to start coding from zero, this way I can provide a highly-personalized result tailored to the client needs. "
        firstSubtitle="My Languages"
        firstDescription="HTML, CSS, JS, ReactJS"
        secSubtitle="Dev Tools"
        secDescription={frontToolsList}
      />
      <Feature
        icon={icons[1]}
        title="Personal Skills"
        mainDescription="I'm a very commited person, I try to do my best whenever I'm working on something both personally or professionally."
        // firstSubtitle="Soft Skills"
        // firstDescription="HTML, CSS, JS, Bootstrap, ReactJS"
        secSubtitle="Soft Skills"
        secDescription={personalSkillsList}
      />
      <Feature
      icon={icons[2]}
        title="Back-End Web Developer"
        mainDescription="Even though it's not my main focus, I have developed some small personal full stack projects, using Django as back-end technology."
        firstSubtitle="My Languages"
        firstDescription="Python & Django"
        secSubtitle="Dev Tools"
        secDescription={backToolsList}
      />
    </div>
  );
};

export default Features;
