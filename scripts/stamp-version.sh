#!/usr/bin/env bash
# Stamp the deploy with the commit that produced it.
#
# "Which commit is production running?" has to be answerable FROM production.
# Without that, a deploy that never happened (a dropped webhook, or a build the
# shared Netlify team skipped for want of credits) is indistinguishable from a
# deploy that did: the site just keeps serving older content and nothing goes
# red. The Deploy watch workflow compares this file against the merged SHA.
#
# Usage: bash scripts/stamp-version.sh <publish-dir>
# Netlify sets COMMIT_REF, BRANCH, CONTEXT and DEPLOY_ID during a build.
set -euo pipefail

dir="${1:?usage: stamp-version.sh <publish-dir>}"
sha="${COMMIT_REF:-$(git rev-parse HEAD 2>/dev/null || echo unknown)}"

mkdir -p "$dir"
cat > "$dir/version.json" <<JSON
{
  "commit": "$sha",
  "shortCommit": "${sha:0:7}",
  "branch": "${BRANCH:-unknown}",
  "context": "${CONTEXT:-unknown}",
  "deployId": "${DEPLOY_ID:-unknown}",
  "builtAt": "$(date -u +%Y-%m-%dT%H:%M:%SZ)"
}
JSON
echo "stamped $dir/version.json with $sha"
