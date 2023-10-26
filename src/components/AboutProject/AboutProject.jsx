import './AboutProject.css'

function AboutProject() {

  return (
    <section className="about-project" id={"aboutProject"}>
      <h2 className="about-project__title">О проекте</h2>
      <div className="about-project__text">
        <div className="about-project__text-item">
          <h3 className="about-project__text-title">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="about-project__text-subtitle">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className="about-project__text-item">
          <h3 className="about-project__text-title">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="about-project__text-subtitle">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className="about-project__scheme">
        <div className="about-project__scheme-item">
          <p className="about-project__scheme-title">1 неделя</p>
          <p className="about-project__scheme-title">4 недели</p>
        </div>
        <div className="about-project__scheme-item">
          <p className="about-project__scheme-subtitle">Back-end</p>
          <p className="about-project__scheme-subtitle">Front-end</p>
        </div>
      </div>
    </section>

  )
}

export default AboutProject;