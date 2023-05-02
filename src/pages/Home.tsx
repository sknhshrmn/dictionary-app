import { useState } from "react";
import { useNavigate } from "react-router-dom";
type DefinitionType = null | any;

function Home() {
  const [word, setWord] = useState("");
  //   const [data, setData] = useState<DefinitionType>(null);
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);

  const navigate = useNavigate();

  async function handleSearchDefinition() {
    // change state loading to true
    setLoading(true);
    // call api function
    const response = await fetch(
      "https://api.dictionaryapi.dev/api/v2/entries/en/" + word
    );

    if (response.status === 200) {
      const jsonData = await response.json();
      navigate("/" + word, { state: jsonData });
    } else {
      setError(true);
    }
    setLoading(false);
  }

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <input
        type="text"
        name="word"
        id="word"
        placeholder="Insert a word to search"
        onChange={(e) => {
          setWord(e.target.value);
        }}
      />
      <button type="submit" onClick={handleSearchDefinition}>
        Search
      </button>
      {isLoading ? <span>Loading..</span> : null}
      {/* render json data, data: data,  replacer: null, spacing:4
      <pre>{JSON.stringify(data, null, 4)}</pre> */}
      {isError ? <span>Invalid Input</span> : null}
    </div>
  );
}

export default Home;
