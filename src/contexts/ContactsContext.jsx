import {createContext, useState} from "react";

export const ContactsContext = createContext({
    contacts: [],
});

function ContactsProvider({children}) {
    const [contacts, setContacts] = useState([]);
    return (
        <ContactsContext.Provider value={{contacts}}>
            {children}
        </ContactsContext.Provider>
    );
}

export default ContactsProvider;
