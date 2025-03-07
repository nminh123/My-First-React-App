import reactLogo from "./assets/react-core-concepts.png";
// import componentImage from "./assets/components.png";
// import stateImage from "./assets/state-mgmt.png";
// import jsxImage from "./assets/jsx-ui.png";
// import configImage from "./assets/config.png";
import { CORE_CONCEPTS } from "./data.js";

const reactDescription = ['Fundamental', 'Crucial', 'Core'];
function genRandomDesc(max) {
  return Math.floor(Math.random() * (max + 1));
}

function CoreConcept(props) {
  return (
    <li>
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.desc}</p>
    </li>
  );
}

function Header() {
  const desc = reactDescription[genRandomDesc(2)];

  return (<header>
    <img src={reactLogo} alt="Stylized atom" />
    <h1>React Essentials</h1>
    <p>
      {desc} React concepts you will need for almost any app you are
      going to build!
    </p>
  </header>
  );
}
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
              title={CORE_CONCEPTS[1].title}
              desc={CORE_CONCEPTS[1].desc}
              image={CORE_CONCEPTS[1].image}
            />
            <CoreConcept 
              title={CORE_CONCEPTS[2].title}
              desc={CORE_CONCEPTS[2].desc}
              image={CORE_CONCEPTS[2].image}
            />
            <CoreConcept 
              title={CORE_CONCEPTS[3].title}
              desc={CORE_CONCEPTS[3].desc}
              image={CORE_CONCEPTS[3].image}
            />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
