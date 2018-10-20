import { GitHub, GitHubInterface } from "./github"

const comments = async (owner: string, repo: string, issue: number, github: GitHubInterface) => {
  const issueCommentsPath = ["repos", owner, repo, "issues", issue, "comments"].join("/")
  const response = await github.request(issueCommentsPath, "GET")
  return await github.paginate(response, [])
}
const issues = async (owner: string, repo: string, issue: number, github: GitHubInterface) => {
  const issueCommentsPath = ["repos", owner, repo, "issues", issue].join("/")
  const response = await github.request(issueCommentsPath, "GET")
  return await github.paginate(response, [])
}
export { comments }
export { issues }