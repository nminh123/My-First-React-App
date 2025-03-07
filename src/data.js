import componentImage from "./assets/components.png";
import stateImage from "./assets/state-mgmt.png";
import jsxImage from "./assets/jsx-ui.png";
import propImage from "./assets/config.png";

export const CORE_CONCEPTS = [
    {
        image: componentImage,
        title:'Components',
        desc:
        'The core UI building block - compose the user interface by combining multiple components.'
    },
    {
        image: jsxImage,
        title:'JSX',
        desc:
        'Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered.'
    },
    {
        image: propImage,
        title:'Props',
        desc:
        'Make components configurable (and therefore reusable) by passing input data to them.'
    },
    {
        image: stateImage,
        title:'State',
        desc:
        'React-managed data which, when changed, causes the component to re-render & the UI to update.'
    }
]