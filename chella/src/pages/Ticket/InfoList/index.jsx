export default function InfoList({ name, ticket }) {
  return (
    <>
      <h6>{name}</h6>
      <div className="infos">
        <ul>
          <li>{ticket}</li>
          <li></li>
          <li>Data: 11/03</li>
          <li>Local: São Paulo-SP</li>
        </ul>
      </div>
    </>
  );
}
