#!/bin/sh

set -ex
cd $(dirname $0)

git push origin
git push --mirror https://github.com/mercur3/old-is-better-than-new

