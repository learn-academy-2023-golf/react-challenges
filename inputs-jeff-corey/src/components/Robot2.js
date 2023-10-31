const Robot2 = (props) => {
  let blaIndex = 0;
  let robotOutput = "";
  const bla = ["B", "L", "A"];
  console.log("blaIndex", blaIndex);
  console.log("robotOutput", robotOutput);
  console.log("bla", bla);
  const robotBla = (human) => {
    for (let i = 0; i < human.length; i++) {
      if (blaIndex === 3) {
        blaIndex = 0;
      } else {
        robotOutput = (robotOutput + bla[blaIndex]);
        blaIndex = (blaIndex + 1);
      }
    }
    return robotOutput
  };
  return (
    <>
      <h2>Robot2</h2>
      <p>{robotBla(props.userInput)}</p>
    </>
  );
};

export default Robot2;
