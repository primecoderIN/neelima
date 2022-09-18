const Card = ({user}) => {
  return (
    <div style={{ border: "2px solid red", padding: "1rem" }}>
      <h1>Name : {user.name}</h1>
      <h3>Email : {user.email}</h3>
    </div>
  );
};

export default Card;
