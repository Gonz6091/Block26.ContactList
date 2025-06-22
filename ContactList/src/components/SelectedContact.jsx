import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

export default function SelectedContact({ selectedContactId, setSelectedContactId }) {
    const [contact, setContact] = useState(null)

useEffect (() => {
    async function fetchContactInfo() {
        const response = await fetch (`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`)
        const result = await response.json()
        setContact(result)
    }
    fetchContactInfo()
}, [selectedContactId])

if (!contact) return <div>Loading...</div>

return (
    <div>
        <h2>{contact.name}</h2>
        <p>{contact.username}</p>
        <p>{contact.email}</p>
        <p>{contact.phone}</p>
        <p>{contact.website}</p>
        <button className="clickable" onClick={()=>setSelectedContactId(null)}>Back</button>
    </div>
    )
}