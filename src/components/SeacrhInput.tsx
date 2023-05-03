import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchInput(props: any) {
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
      setError(false);
    } else {
      setError(true);
    }
    setLoading(false);
  }

  return (
    <div className="bg-gray-200 flex  h-[50px] items-center w-full justify-between p-3">
      <div className=" text-2xl uppercase font-semibold">Dictionary</div>
      <div className="flex items-center justify-center ">
        {isLoading ? (
          <span className="text-xs text-center px-4">Loading..</span>
        ) : null}
        {isError ? (
          <span className="text-xs text-center text-red-700 py-2">
            Invalid Input
          </span>
        ) : null}
        <input
          className="border-black border rounded text-sm w-[150px] m-3 hover:cursor-text hover:bg-slate-200 "
          type="text"
          name="word"
          id="word"
          placeholder="Insert a word to search"
          onChange={(e) => {
            setWord(e.target.value);
          }}
        />
        <button
          className="bg-slate-400  text-sm rounded  w-min px-2 my-3"
          type="submit"
          onClick={handleSearchDefinition}
        >
          Search
        </button>
        {/* render json data, data: data,  replacer: null, spacing:4
              <pre>{JSON.stringify(data, null, 4)}</pre> */}
      </div>
    </div>
  );
}

export default SearchInput;
