import '../../../common/styles.css';
import { useAPIStore } from '../../../datastore';
import ModifierInformation from "./modifier-information";
import './styles.css';

export interface EndpointModifiersRegisterProps {
    index: number;
}

export default function EndpointModifiersRegister(props: EndpointModifiersRegisterProps) {

    const { index } = props;

    const addModifier = useAPIStore(state => state.addEndpointModifier)
    const modifiers = useAPIStore(state => state.apiDefinitions[index].endpointModifiers)

    const add = () => {
        addModifier(index, "SEC", "#ff00cc", "example... this is a secure endpoint");
    }

    return (
        <div id='endpoint-modifiers-container'>
            <h2 className="section-title" id='modifiers-title'>API endpoint specific modifications register</h2>
            <button onClick={add}>New modifier</button>
            <div id="modifiers">
                {
                    modifiers.map((_, index) => {
                        return <ModifierInformation key={index} />
                    })
                }

            </div>

        </div>

    )
}