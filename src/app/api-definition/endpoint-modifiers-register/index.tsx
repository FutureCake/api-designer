import ModifierInformation from "./modifier-information";

export default function EndpointModifiersRegister() {



    return (
        <div id='endpoint-information-container'>
            <h2>API endpoint specific information register</h2>
            <div id="information-definitions">
                <ModifierInformation />
            </div>
            <button>New information definition</button>
        </div>

    )
}