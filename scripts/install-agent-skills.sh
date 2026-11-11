#!/usr/bin/env bash
set -euo pipefail
echo "Installing official Remotion skills in this agent environment..."
npx --yes skills add remotion-dev/skills
echo "Done. Optional editor: npx skills add veedstudio/open-edit --skill open-edit"
