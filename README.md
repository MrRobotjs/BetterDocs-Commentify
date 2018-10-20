# Commentify

A repo you can use to work-around GH issue comment request limits by hosting your own server that makes authenticated requests on your behalf.

It provides:

* The same comment route as GH's API `/repos/:owner/:repo/issues/:number/comments` & `/repos/:owner/:repo/issues/:number/`
* Is locked to one org by default.
* Handles cross-domain requests
* Paginates under-the-hood for you, so you make one request
* Embeds comment Reactions into the request for you

The JSON looks like this:

```json
[
   {
    "url": "https://api.github.com/repos/MrRbotjs/BetterDocs/issues/comments/000000000",
    "html_url": "https://github.com/MrRobotjs/BetterDocs/issues/4#issuecomment-000000000",
    "issue_url": "https://api.github.com/repos/artsy/BetterDocs/issues/4",
    "id": 000000000,

    "user": {
      "login": "{{USER}}",
      "id": 000000,
      "avatar_url": "https://avatars1.githubusercontent.com/u/000000?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/{{USER}}",
      "html_url": "https://github.com/{{USER}}",
      "followers_url": "https://api.github.com/users/{{USER}}/followers",
      "following_url": "https://api.github.com/users/{{USER}}/following{/other_user}",
      "gists_url": "https://api.github.com/users/{{USER}}/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/{{USER}}/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/{{USER}}/subscriptions",
      "organizations_url": "https://api.github.com/users/{{USER}}/orgs",
      "repos_url": "https://api.github.com/users/{{USER}}/repos",
      "events_url": "https://api.github.com/users/{{USER}}/events{/privacy}",
      "received_events_url": "https://api.github.com/users/{{USER}}/received_events",
      "type": "User",
      "site_admin": false
    },
    "created_at": "2017-07-17T14:38:14Z",
    "updated_at": "2017-07-17T14:38:14Z",
    "author_association": "NONE",
    "body": "The Comment",

    "body_html": "<p>The Comment</p>",

    "reactions": {
      "url": "https://api.github.com/repos/MrRobotjs/BetterDocs/issues/comments/00000000/reactions",
      "total_count": 0,
      "+1": 0,
      "-1": 0,
      "laugh": 0,
      "hooray": 0,
      "confused": 0,
      "heart": 0
    }
  },
  { ... }
]
```

# Front-End

This is only a server, you're expected to write your own front-end. 

# Setup

1. Make a GitHub [personal access token](https://github.com/settings/tokens) for the server to use. It only needs `public_repo` if you have an public repo for comment. Otherwise, use `repo`.

2. Click: [![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy?template=https://github.com/MrRobotjs/BetterDocs-Commentify)

After that, you are done, pretty simple.
