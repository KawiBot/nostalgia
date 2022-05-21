import React, { useState, useEffect } from "react"
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core"
import { useDispatch } from "react-redux"
import { getPosts, likePost } from "./actions/posts"
import Posts from "./components/Posts/Posts"
import Form from "./components/Form/Form"
import nostalgia from "./images/nostalgia.png"
import useStyles from "./styles"

const App = () => {
  const [currentId, setcurrentId] = useState(0)
  const classes = useStyles()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPosts())
  }, [currentId, dispatch])

  return (
    <Container maxidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          Nostalgia
        </Typography>
        <img
          src={nostalgia}
          className={classes.image}
          alt="nostalgia"
          height="60"
        />
      </AppBar>
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
    </Container>
  )
}

export default App
