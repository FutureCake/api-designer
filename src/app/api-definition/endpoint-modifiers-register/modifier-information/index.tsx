import './styles.css'

export default function ModifierInformation() {

    return (
        <div className='modifier-container'>
            <div className='identifier-container'>
                <input className='identifier' name='modification-identifier' maxLength={3} minLength={1} />
                <div className='identifier-color'></div>
            </div>
            <input type="text" name="modifier-description" className="modifier-description" value="Description of the modifier for example this is a secure endpoint that requires the user to be authorized" />
        </div>
    )
}