import React from "react";

const ContactCard = (props) => {
    const {id,name,email} = props.contactList;
        return(
            <div className="item py-3">
                <i class="fs-3 align-middle user circle outline icon"></i>
                <div className="content">
                    <div className="header">
                        {name}
                    </div>
                    <div>{email}</div>
                </div>
                <i className="fs-5 align-middle trash alternate outline icon text-danger "
                onClick={()=> props.clickHandler(id)}
                ></i>
            </div>
        )
}

export default ContactCard;