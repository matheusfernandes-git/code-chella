export default function InfoList({ name, ticket }) {
  return (
    <>
      <h6>{name}</h6>
        <ul>
          <li>{ticket}</li>
          <li>Setor Pista</li>
          <li>Data: 11/03</li>
          <li>Local: São Paulo-SP</li>
        </ul>
    </>
  );
}
