if (!danger.github.pr.assignee)
  fail('Please assign someone to merge this PR, and optionally include people who should review.')

if (danger.github.pr.body.length === 0)
  fail('Please add a description to your PR')

if (danger.github.pr.requested_reviewers.length < 1)
  warn(`You should add at least one reviewer to the PR`)

if (danger.git.modified_files.includes('CHANGELOG.md'))
  fail('Please DO NOT CHANGE the CHANGELOG.')

schedule(require('danger-plugin-spellcheck').default())
