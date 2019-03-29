workflow "Main" {
  on = "push"
  resolves = "Publish"
}

action "Install" {
  uses = "docker://culturehq/actions-yarn:latest"
  args = "install"
}

action "Lint" {
  needs = "Install"
  uses = "docker://culturehq/actions-yarn:latest"
  args = "lint"
}

action "Rules" {
  needs = "Install"
  uses = "docker://culturehq/actions-yarn:latest"
  args = "rules"
}

action "Tag" {
  needs = ["Lint", "Rules"]
  uses = "actions/bin/filter@master"
  args = "tag"
}

action "Publish" {
  needs = "Tag"
  uses = "actions/npm@master"
  args = "publish --access public"
  secrets = ["NPM_AUTH_TOKEN"]
}
