import { FormEvent, useState } from 'react';
import '../../../../common/styles.css';
import { useAPIStore } from '../../../../datastore';

export interface EndpointProps {
    apiIndex: number;
}

export default function Endpoint(props: EndpointProps) {

    const { apiIndex } = props;

    // use local state for now -> this should later update the api store. 
    const [url, setUrl] = useState<string>("/");

    const modifiers = useAPIStore(state => state.apiDefinitions[apiIndex].endpointModifiers)
    const hasModifiers = modifiers.length > 0;

    const onModifierSearch = (e: FormEvent<HTMLInputElement>) => {

    }

    const formatUrl = (raw: string): string => {
        const matches = [...raw.matchAll(/{[^}]+}/g)];
        return raw;
    }

    const updateUrl = (e: FormEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value;
        const formatted = formatUrl(value);

        setUrl(formatted);
    }

    return (
        <div className="endpoint-container">
            <div className="modifiers-container">
                <input disabled={!hasModifiers} type="text" name="add-modifier" id="add-modifier" onChange={onModifierSearch} />
                {!hasModifiers && <p>You have no modifiers defined... click <a href='#' onClick={() => { }}>here</a> to add a modifier</p>}

            </div>
            <input type="text" name="http-type" id="http-type" />
            <select className='http-methods'>
                <option>GET</option>
                <option>POST</option>
                <option>PUT</option>
                <option>PATCH</option>
                <option>DELETE</option>
            </select>
            <input type="text" name="url" id="url" value={url} onChange={updateUrl} />
            <div className="endpoint-data-container">
                <div className="data-container">
                    <h3 className="content-title">Request data:</h3>
                    <div></div>
                </div>
                <div className="data-container">
                    <h3 className="content-title">Response data:</h3>
                    <div></div>
                </div>
            </div>
        </div>
    )
}