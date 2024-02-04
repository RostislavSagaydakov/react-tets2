import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHeart} from '@fortawesome/free-solid-svg-icons'

export default function HeaderActionsWishlist() {
    return (
        <>
            <button className="header__actions-action">
                <FontAwesomeIcon icon={faHeart} />
            </button>
        </>
    )
}