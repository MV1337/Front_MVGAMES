import styles from "./About.module.css";

const About = () => {
  return (
    <div className={styles.about}>
      <h2>
        Sobre o <span>Projeto</span>
      </h2>
      <p>
        Este projeto foi criado para consumir uma API, uma API que mostra alguns dos
        jogos mais jogados do momento. Lembrando que esse projeto é apenas para aplicar conhecimento. <br />
        O foco maior do projeto foi no back-end.
      </p>
      <p>
        Para a criação da API, utilizei Node.JS, Express, Mysql, Sequelize e
        Postman para testar os endpoints. Para o Front, utilizei ReactJs e para
        o consumo da API, utilizei o AXIOS.
      </p>
      <h2>
        Acesse o repositório deste e de outros projetos clicando
        <span>
          <a href="https://github.com/MV1337?tab=repositories" target='_blank' rel="noopener noreferrer">
            {" "}
            aqui
          </a>
        </span>
      </h2>
    </div>
  );
};

export default About;
