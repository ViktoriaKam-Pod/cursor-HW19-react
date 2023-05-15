import React, { Fragment } from "react";
import { useState } from "react";
import contactsAll from "./Info"


function Contact(props){
    return(
        <div className="card-contacts">
            <p className="contacts-p">First name: {props.firstName}</p>
            <p className="contacts-p">Last name: {props.lastName}</p>
            <p className="contacts-p">Phone: {props.phone}</p>
        </div>
    )
}

function ContactsInfo(){
    const [search, setSearch] = useState("");

    const handleSearchChange = contactsAll.filter(el => {
        return el.lastName.includes(search)
    })

    let element=[];
    handleSearchChange.forEach((elem,i) => {
        element.push(
            <Contact firstName={elem.firstName} lastName={elem.lastName} phone={elem.phone} key={i} />
        )
    });

        return(
            <Fragment>
                <input className='search' placeholder='🔍 Пошук' value={search} 
                onChange={(event) => setSearch(event.target.value)}/>
                <div className="main-card-contacts">
                    {element}
                </div>
            </Fragment>
        )
}
    export default ContactsInfo