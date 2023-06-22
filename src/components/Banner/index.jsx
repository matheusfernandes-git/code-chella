import "./style.css";

export default function Banner({ src, title }) {
  return (
    <div
      className="container-banner d-flex justify-content-center align-items-center h-50 p-2 text-center"
      style={{
        background: `url(${src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <h1 className="d-flex justify-content-center align-items-center w-100">{title}</h1>
    </div>
  );
}
