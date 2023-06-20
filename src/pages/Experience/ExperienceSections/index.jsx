import "./styles.css";

export default function ExperienceSection({
  title,
  text,
  id,
  idtext,
  imgSust,
}) {
  return (
    <div className="container-content">
      <picture className={imgSust}>
        <source
          srcSet={`/assets/ExperienceSections/${id}/mobile.png`}
          media="(max-width: 768px)"
        />
        <img src={`/assets/ExperienceSections/${id}/experiencia.png`} />
      </picture>
      <div className="container-text" id={idtext}>
        <h6>{title}</h6>
        <p>{text}</p>
      </div>
    </div>
  );
}
