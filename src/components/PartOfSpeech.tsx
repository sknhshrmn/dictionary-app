import { useParams } from "react-router";
import Phonetic from "../components/Phonetic";
import Definition from "../pages/Definition";

function PartOfSpeech(props: any) {
  const param = useParams();
  const phoneticArray = props.data.phonetics;
  const definitionArray = props.data.meanings[0].definitions;
  console.log(definitionArray);

  return (
    <div>
      <div>{props.data.meanings[0].partOfSpeech}</div>
      <div className="flex flex-row items-center justify-start gap-3">
        {phoneticArray.map((phonetic: any, index: number) => {
          return <Phonetic key={index} phonetic={phonetic} />;
        })}
      </div>
      <ol className="list-decimal mx-8">
        {definitionArray.map((definition: any, index: number) => {
          let hasExample = false;
          if (definition.example) {
            hasExample = true;
          }
          return (
            <li key={index}>
              <div>{definition.definition}</div>
              {hasExample ? (
                <div className="font-light">"{definition.example}"</div>
              ) : (
                <></>
              )}
            </li>
          );
        })}
      </ol>
    </div>
  );
}

export default PartOfSpeech;
