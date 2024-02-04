import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBagShopping} from '@fortawesome/free-solid-svg-icons'

export default function HeaderActionsCart() {
    return (
        <>
            <button className="header__actions-action">
                <FontAwesomeIcon icon={faBagShopping} />
            </button>
        </>
    )
}