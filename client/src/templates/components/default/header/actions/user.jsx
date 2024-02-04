import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser} from '@fortawesome/free-solid-svg-icons'

export default function HeaderActionsUser() {
    return (
        <>
            <button className="header__actions-action">
                <FontAwesomeIcon icon={faUser} />
            </button>
        </>
    )
}