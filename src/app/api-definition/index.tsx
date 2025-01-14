import { APIDefinition, useAPIStore } from "../../datastore";
import APIEndpoints from "./api-endpoints";
import EndpointModifiersRegister from "./endpoint-modifiers-register";

export interface APIDefinitionProps {
    index: number;
    definition: APIDefinition;
}

export default function API(props: APIDefinitionProps) {

    const { index, definition } = props

    const remove = useAPIStore((state) => state.removeAPIDefinition)

    const del = () => {
        remove(index)
    }

    return (
        <div>
            <input type="text" name="api-name" id="api-name" value={definition.name} onChange={() => { }} />
            <button onClick={del}>Delete</button>

            <EndpointModifiersRegister index={index} />

            <h2 className="section-title">Base url: &nbsp;</h2><input type="text" name="base-url" id="base-url" value={definition.baseUrl} onChange={() => { }} />

            <APIEndpoints index={index} />
        </div>
    )
}