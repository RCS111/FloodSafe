import { Container } from '@material-ui/core'
import React from 'react'
import Spinner from 'react-spinkit'

function Loading() {
    return (
        <Container align = 'center'>
            <Spinner name="chasing-dots" color="coral"/>
        </Container>
    )
}

export default Loading