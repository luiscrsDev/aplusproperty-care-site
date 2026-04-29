#!/bin/bash
# Bootstrap script — run once on your Mac to:
#   1. Wipe partial node_modules left from the sandbox
#   2. Install deps cleanly
#   3. Verify build works
#   4. Make the initial git commit
#
# Usage:
#   cd ~/dev/aplusproperty-care-site
#   chmod +x bootstrap.sh
#   ./bootstrap.sh

set -euo pipefail

cd "$(dirname "$0")"

echo "==> Cleaning partial install..."
rm -rf node_modules package-lock.json .next

echo "==> Installing dependencies..."
npm install --no-fund --no-audit

echo "==> Type-checking and building..."
npm run build

echo "==> Initial git commit..."
git add -A
if ! git diff --cached --quiet; then
  git commit -m "chore: initial scaffold — Next 16 + Tailwind 4 + components + schema + contact API"
fi

echo ""
echo "==> Done. Next steps:"
echo "    1. cp .env.example .env.local      # fill Supabase + Resend"
echo "    2. npm run dev                      # http://localhost:3000"
echo ""
echo "    Optional — push to GitHub:"
echo "      gh repo create aplusproperty-care-site --private --source=. --remote=origin --push"
echo ""
echo "    Self-destruct (this script):"
echo "      rm bootstrap.sh"

# Auto-clean: comment the line below if you want to keep the script.
rm -- "$0"
