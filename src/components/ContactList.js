import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
    // console.log(props)
    const deleteContactHandler = (id) => {
        props.contactId(id)
    }
    const getContactList = props.contactList.map((data) => {
        return(
            <ContactCard contactList ={data} clickHandler={deleteContactHandler} key = {data.id}/>
        )
    })

    return (
        <div className="ui celled list py-5 m-3">
            <h2>Contact List</h2>
            {getContactList}
        </div>
    )
}

export default ContactList;