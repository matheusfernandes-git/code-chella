import "./style.css";

export default function Banner({ src, title }) {
  return (
    <div
      className="container-banner"
      style={{
        background: `url(${src})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <h1>{title}</h1>
    </div>
  );
}
