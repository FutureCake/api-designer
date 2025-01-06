import { useAPIStore } from '../datastore';
import APIDefinition from './api-definition';
import './app.css';

function App() {

    const apis = useAPIStore((state) => state.apiDefinitions)
    const setApis = useAPIStore((state) => state.addAPIDefinition)

    const addAPI = () => {
        setApis('Placeholder name for your api')
    }

    return (
        <div className='App'>
            <h1 id='title'>API designer</h1>

            <button onClick={addAPI}>New API definition</button>

            {
                apis.map((api, index) => {
                    const name = api.name
                    return <APIDefinition name={name} key={index} />
                })
            }
        </div>
    );
}

export default App;
