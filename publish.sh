#!/usr/bin/env bash
set -o errexit -o pipefail -o nounset


npm run docs \
  && git add . \
  && git commit -m "${1}" \
  && npm version patch

