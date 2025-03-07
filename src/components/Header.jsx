import reactLogo from "../assets/react-core-concepts.png";

const reactDescription = ['Fundamental', 'Crucial', 'Core'];
function genRandomDesc(max) {
  return Math.floor(Math.random() * (max + 1));
}

export function Header() {
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