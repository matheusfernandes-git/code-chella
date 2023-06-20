import './style.css';

export default function DetailsSections({ title, text, id }) {
  return (
    <>
      <div className='container-details-sections'>
        <picture>
          <source
            srcSet={`/assets/DetailsSections/${id}/mobile.png`}
            media="(max-width: 768px)"
          />
          <img src={`/assets/DetailsSections/${id}/details.png`} />
        </picture>
        <h6>{title}</h6>
        <p>{text}</p>
      </div>
    </>
  );
}
