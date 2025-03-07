// import componentImage from "./assets/components.png";
// import stateImage from "./assets/state-mgmt.png";
// import jsxImage from "./assets/jsx-ui.png";
// import configImage from "./assets/config.png";
import { CORE_CONCEPTS } from "./data.js";
import { Header } from "./components/Header.jsx";
import { CoreConcept } from "./components/CoreConcept.jsx";

function App() {
  return (
    <div>
      <Header />
      <main>
        {/* <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              title="Components"
              desc="The core UI building block"
              image={componentImage}
            />
            <CoreConcept 
              title="Configuration"
              desc="dessss desss"
              image={configImage}
            />
            <CoreConcept 
              title="JSX UI"
              desc="UIUIUIUI"
              image={jsxImage}
            />
            <CoreConcept 
              title="State"
              desc="dess desss"
              image={stateImage}
            />
          </ul>
        </section> */}
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              desc={CORE_CONCEPTS[0].desc}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcept
              {...CORE_CONCEPTS[1]}
            />
            <CoreConcept
              {...CORE_CONCEPTS[2]}
            />
            <CoreConcept
              {...CORE_CONCEPTS[3]}
            />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
