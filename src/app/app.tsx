import { useAPIStore } from '../datastore';
import API from './api-definition';
import './app.css';

function App() {

    const apis = useAPIStore((state) => state.apiDefinitions)
    const addAPI = useAPIStore((state) => state.addAPIDefinition)

    const add = () => {
        addAPI('Placeholder name for your api')
    }

    return (
        <div id='app'>
            <h1 id='title'>API designer</h1>

            <button id='new-api' onClick={add}>New API definition</button>

            {
                apis.map((api, index) => {
                    return <API definition={api} key={index} index={index} />
                })
            }
        </div>
    );
}

export default App;
