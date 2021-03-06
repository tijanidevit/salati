#!/bin/sh
current_branch=$(git symbolic-ref HEAD | sed -e 's,.*/\(.*\),\1,')
pass=true

if [ $current_branch = "master" ]; then
  yarn lint
  if [ $? != 0 ]; then
    pass=false
  fi
fi

if $pass; then
  exit 0
else
  echo ""
  echo "PUSH FAILED:"
  echo "Some linting issues. Please fix them and try pushing again."
  exit 1
fi
