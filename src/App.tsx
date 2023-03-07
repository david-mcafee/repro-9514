import "./App.css";
import { DataStore } from "aws-amplify";
import { Pathway, PathwayPitstop } from "./models";

function App() {
  const test = async () => {
    const pathway = await DataStore.save(
      new Pathway({
        title: `Pathway title ${Date.now()}`,
        description: "Pathway Description",
        thumbnail: "thumbnail",
      })
    );

    console.log("pathway:", pathway);

    let pathwayPitstop;

    // If using TypeScript, check that the pathway is not `undefined`
    if (pathway) {
      pathwayPitstop = await DataStore.save(
        new PathwayPitstop({
          pathwayID: pathway.id,
          positionX: 100,
          positionY: 100,
        })
      );
    }

    console.log("pathwayPitstop:", pathwayPitstop);

    const queriedPathway = await DataStore.query(Pathway, pathway.id);

    // If using TypeScript, check that the queriedPathway is not `undefined`
    if (queriedPathway) {
      const pathwayPitstops = await queriedPathway.pathwayPitstops.toArray();
      console.log("pathwayPitstops", pathwayPitstops);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={test}>Create Records + Query</button>
      </header>
    </div>
  );
}

export default App;
