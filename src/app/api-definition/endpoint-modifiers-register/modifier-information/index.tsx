import { FormEvent } from 'react';
import './styles.css';

export default function ModifierInformation() {

    const updateIdentifierText = (e: FormEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value;
    }

    const updateIdentifierColor = () => {

    }

    const updateIdentifierDesc = (e: FormEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value;
    }

    return (
        <div className='modifier-container'>
            <div className='identifier-container'>
                <input className='identifier' name='modification-identifier' maxLength={3} minLength={1} onChange={updateIdentifierText} />
                <div className='identifier-color'></div>
            </div>
            <input type="text" name="modifier-description" className="modifier-description" value="Description of the modifier for example this is a secure endpoint that requires the user to be authorized" onChange={updateIdentifierDesc} />
        </div>
    )
}