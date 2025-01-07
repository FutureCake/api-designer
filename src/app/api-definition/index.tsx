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
            <input type="text" name="api-name" id="api-name" value={definition.name} />
            <button onClick={del}>Delete</button>

            <EndpointModifiersRegister index={index} />

            <input type="text" name="base-url" id="base-url" value={definition.baseUrl} />

            <APIEndpoints />
        </div>
    )
}