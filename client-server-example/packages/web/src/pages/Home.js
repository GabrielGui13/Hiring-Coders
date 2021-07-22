import { ClientList } from "components/ClientList"
import { ClientEdit } from "components/ClientEdit";
import React, { useState } from "react"

export default function Home() {
    const [clientId, setClientId] = useState(null);

    return (
        <main>
            <ClientList onSelectClient={setClientId}/>
            <ClientEdit clientId={clientId}></ClientEdit>
        </main>
    ) 
} 
    
    
