import { useEffect, useState } from "react";

const FetchedDataSection = (props) => {
  const [fakeData, setFakeData] = useState("");

  useEffect(() => {
    requestFakeData();
  }, []);

  /* request  */
  async function requestFakeData() {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const json = await res.json();
    setFakeData(json.title);
  }

  {
    /* fake data item*/
  }
  return (
    <div>
      <h2>{fakeData}</h2>
    </div>
  );

  {
    /* fake data item*/
  }
};

export default FetchedDataSection;
