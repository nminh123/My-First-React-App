import componentImage from "./assets/components.png";
import stateImage from "./assets/state-mgmt.png";
import jsxImage from "./assets/jsx-ui.png";
import propImage from "./assets/config.png";

export const CORE_CONCEPTS = [
    {
        image: componentImage,
        title: 'Components',
        desc:
            'The core UI building block - compose the user interface by combining multiple components.'
    },
    {
        image: jsxImage,
        title: 'JSX',
        desc:
            'Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered.'
    },
    {
        image: propImage,
        title: 'Props',
        desc:
            'Make components configurable (and therefore reusable) by passing input data to them.'
    },
    {
        image: stateImage,
        title: 'State',
        desc:
            'React-managed data which, when changed, causes the component to re-render & the UI to update.'
    }
]

export const EXAMPLES = {
    components: {
        title: 'Components',
        desc: 'The core UI building block - compose the user interface by combining multiple components.',
        code: 
    `function Welcome() {
        return <h1>Hello, World!!!</h1>;
    }`
    },
    jsx: {
        title: 'JSX',
        desc: 'JSX is a syntax extension to JavaScript...',
        code: `
    <div>
        <h1>Welcome {userName}</h1>
        <p>Time to learn React!</p>
    </div>`
    },
    props: {
        title: 'Props',
        desc: 'Components accept arbitrary inputs called props...',
        code: 
    `function Welcome(props) {
        return <h1>Hello {props.name}</h1>;
    }`
    },
    state: {
        title: 'State',
        desc: 'State allows React components to change their output over time...',
        code: 
    `function Counter() {
        const [count, setCount] = useState(0);
        return <button onClick={() => setCount(count + 1)}>Click Me {count}
        </button>;
    }`
    }
};