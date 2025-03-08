// import componentImage from "./assets/components.png";
// import stateImage from "./assets/state-mgmt.png";
// import jsxImage from "./assets/jsx-ui.png";
// import configImage from "./assets/config.png";
import { CORE_CONCEPTS, EXAMPLES } from "./data.js";
import { Header } from "./components/Header.jsx";
import { CoreConcept } from "./components/CoreConcept.jsx";
import { TabButton } from "./components/TabButton.jsx";
import { useState } from "react";

function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
    console.log(selectedButton);
  }

  let tabContent = <p>Please click a content</p>

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].desc}</p>
        <pre>
          <code>
            {EXAMPLES[selectedTopic].code}
          </code>
        </pre>
      </div>
    );
  }

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
            {/* <CoreConcept
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
            /> */}
            {CORE_CONCEPTS.map((conceptItem) => (
              <CoreConcept key={conceptItem.title} {...conceptItem}/>
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={selectedTopic === 'components'} onSelect={() => handleSelect("components")}>Components</TabButton>
            <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => handleSelect("jsx")}>JSX</TabButton>
            <TabButton isSelected={selectedTopic === 'props'} onSelect={() => handleSelect("props")}>Props</TabButton>
            <TabButton isSelected={selectedTopic === 'state'} onSelect={() => handleSelect("state")}>State</TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
