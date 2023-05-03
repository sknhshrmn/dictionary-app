import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
        width: "50vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "0 auto",
        marginTop: "50%",
        transform: "translateY(-75%)",
      }}
    >
      <div className="text-2xl uppercase font-semibold">Dictionary</div>
      <input
        className="border-black border rounded-2xl text-center w-full hover:cursor-text hover:bg-slate-200 "
        type="text"
        name="word"
        id="word"
        placeholder="Insert a word to search"
        onChange={(e) => {
          setWord(e.target.value);
        }}
      />
      <button
        className="bg-slate-400 m-2 text-sm rounded-2xl w-min px-2 py-1"
        type="submit"
        onClick={handleSearchDefinition}
      >
        Search
      </button>
      {/* render json data, data: data,  replacer: null, spacing:4
      <pre>{JSON.stringify(data, null, 4)}</pre> */}
      {isError ? (
        <span className="text-xs text-center text-red-700 py-2">
          Invalid Input
        </span>
      ) : null}
      {isLoading ? (
        <span className="text-xs text-center p-5">Loading..</span>
      ) : null}
    </div>
  );
}

export default Home;
