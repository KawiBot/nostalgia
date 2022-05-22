import React, { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import { Container, Grow, Grid } from "@material-ui/core"

import Posts from "../Posts/Posts"
import Form from "../Form/Form"

import { getPosts } from "../../actions/posts"

const Home = () => {
  const [currentId, setcurrentId] = useState(0)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPosts())
  }, [currentId, dispatch])

  return (
    <Grow in>
      <Container>
        <Grid
          container
          justify="space-between"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12} sm={7}>
            <Posts setcurrentId={setcurrentId} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Form currentId={currentId} setcurrentId={setcurrentId} />
          </Grid>
        </Grid>
      </Container>
    </Grow>
  )
}

export default Home