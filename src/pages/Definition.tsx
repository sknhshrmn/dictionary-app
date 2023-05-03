import { useLocation, useParams } from "react-router-dom";
import Phonetic from "../components/Phonetic";
import PartOfSpeech from "../components/PartOfSpeech";
import SearchInput from "../components/SeacrhInput";

function Definition() {
  const param = useParams();
  const location = useLocation();
  const dataArray = location.state;

  return (
    <div className="flex justify-center items-start ">
      <div className="flex flex-col justify-center items-start w-4/5">
        <SearchInput />
        <div className="bg-gray-50 w-full min-h-[calc(100vh_-_50px)] p-3">
          <div className="text-xl font-semibold">{param.word}</div>
          {dataArray.map((data: any, index: number) => {
            return <PartOfSpeech key={index} data={data} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Definition;
