import APIEndpoints from "./api-endpoints";
import EndpointModifiersRegister from "./endpoint-modifiers-register";

interface APIDefinitionProps {
    name: string
}

export default function APIDefinition(props: APIDefinitionProps) {

    const { name } = props

    return (
        <div>
            <input type="text" name="api-name" id="api-name" value={name} />

            <EndpointModifiersRegister />

            <input type="text" name="base-url" id="base-url" value={"http://127.0.0.1:3000/"} />

            <APIEndpoints />
        </div>
    )
}