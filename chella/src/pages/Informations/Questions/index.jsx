import "./style.css";

export default function Questions({ title, text }) {
  return (
    <>
      <details>
        <summary>{title}</summary>
        <p>{text}</p>
      </details>
    </>
  );
}
