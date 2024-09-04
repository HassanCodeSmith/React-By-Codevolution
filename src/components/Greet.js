// function Greet() {
//   return <h1>Hello Hassan Murtaza</h1>;
// }

export const Greet = (props) => {
  console.log(props);
  return (
    <>
      <h1>
        Hello {props.name} a.k.a {props.heroName}
      </h1>
      {props.children}
    </>
  );
};

// export default Greet;
