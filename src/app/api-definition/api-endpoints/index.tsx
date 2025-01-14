import { Endpoint as EndpointType, useAPIStore } from "../../../datastore";
import Endpoint from "./endpoint";

export interface APIEndpointsProps {
    index: number;
}

export default function APIEndpoints(props: APIEndpointsProps) {

    const { index } = props

    const endpoints = useAPIStore(state => state.apiDefinitions[index].endpoints)
    const addEndpoint = useAPIStore(state => state.addEndpoint)

    const add = (group: boolean) => {
        addEndpoint(index, {
            name: "Get Card",
            url: "/card/{id}"
        } as EndpointType)
    }

    const removeAll = () => {

    }

    return (
        <div id="endpoints-container">
            <h2 className="section-title">Endpoints</h2>

            <div>
                <button onClick={add.bind(null, false)}>Add endpoint</button>
                <button onClick={add.bind(null, true)}>Add endpoints group</button>
                <button onClick={removeAll}>Remove all endpoints</button>
            </div>

            <div id="endpoints">
                {
                    endpoints.map(() => {
                        return <Endpoint apiIndex={index} />
                    })
                }
            </div>
        </div>
    )
}