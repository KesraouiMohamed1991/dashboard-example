import React from 'react'
import Link from 'next/link'

function login() {
    return (
        <div>
            <h1>login</h1>
            <Link href="/dashboard">go dashboard</Link>
        </div>
    )
}

export default login
