import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser} from '@fortawesome/free-solid-svg-icons'
import {useState} from "react";

export default function HeaderActionsUser() {
    const [showUserModal, setShowUserModal] = useState(false)
    const handlerUserModal = ()=> {
        setShowUserModal(showUserModal => !showUserModal)
    }
    return (
        <div className="header__user-container">
            <button className="header__actions-action" onClick={handlerUserModal}>
                <FontAwesomeIcon icon={faUser} />
            </button>
            <div className="modal"></div>
        </div>
    )
}