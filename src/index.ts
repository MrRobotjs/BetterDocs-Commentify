import { GitHub } from "./github"
import * as express from "express"
import { comments } from "./requests"
import { issues } from "./requests"

const github = GitHub(process.env.GITHUB_ACCESS_TOKEN)
const port = Number(process.env.PORT) || 5000
const owner = process.env.ONLY_OWNER

const app = express()
app.set("port", port)
app.get("/repos/:owner/:repo/issues/:number/comments", (req, res) => {
  if (req.params.owner !== owner) {
    res.status(401)
    res.json({ message: "Only can get comments from this owner: " + owner })
    return
  }

  const repo = req.params.repo
  const number = req.params.number
  comments(owner, repo, number, github).then(comments => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE")
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization")
    res.status(200)
    res.json(comments)
  })
})

app.get("/repos/:owner/:repo/issues/:number", (req, res) => {
  if (req.params.owner !== owner) {
    res.status(401)
    res.json({ message: "Only can get issues from this owner: " + owner })
    return
  }

  const repo = req.params.repo
  const number = req.params.number
  issues(owner, repo, number, github).then(issues => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE")
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization")
    res.status(200)
    res.json(issues)
  })
})

app.get("/", (request, res) => {
  res.send("BetterDocs API is working! :)")
})
app.listen(app.get("port"), () => {
  console.log(`Started server at http://localhost:${process.env.PORT || 5000}`)
})
