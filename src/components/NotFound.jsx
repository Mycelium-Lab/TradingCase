import React from 'react'
import styled from '@emotion/styled'

const Sign = styled.span`
    font-size: 2.3rem;
    font-weight: 600;
    color: #717171;
`

export default function NotFound() {
    return (
        <div className="vh-100 d-flex justify-content-center align-items-center flex-column">
            <Sign>404 | Page Not Found</Sign>
        </div>
    )
}
