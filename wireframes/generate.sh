#!/usr/bin/env bash
# Run from inside the wireframes/ directory:
#   cd wireframes && bash generate.sh
set -e
cd "$(dirname "$0")"

echo "=== Generating .excalidraw files ==="
node gen-home.js       > home.excalidraw
node gen-services.js   > services.excalidraw
node gen-navigation.js > navigation.excalidraw
node gen-company.js    > company.excalidraw
node gen-products.js   > products.excalidraw
node gen-wind-power.js > wind-power.excalidraw
node gen-careers.js    > careers.excalidraw

echo ""
echo "=== Applying print prep (strip section backgrounds, darken text) ==="
node print-prep.js

echo ""
echo "=== Patching image placeholders to hachure ==="
node patch-placeholders.js

echo ""
echo "=== Verifying ==="
node verify-print.js
