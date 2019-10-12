import React from "react";

const About = () => {
  return (
    <div className="text-center">
      <h1 className="display-4 ">О Приложении</h1>
      <p className="lead">Менеджер Контактов</p>
      <p className="text-primary">
        Учебное React приложение созданное с помощью библиотек
      </p>
      <ul className="list-group ">
        <li className="list-group-item">React</li>
        <li className="list-group-item">React Redux</li>
        <li className="list-group-item">React-Router-DOM</li>
        <li className="list-group-item">Classnames</li>
        <li className="list-group-item">Bootstrap</li>
        <li className="list-group-item">AXIOS</li>
        <li className="list-group-item">JSON PLACEHOLDER API</li>
      </ul>
      <p className="text-secondary mt-3">Версия 1.0.0</p>
    </div>
  );
};

export default About;
