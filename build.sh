set -x

SRC_JS=bookmarklet.js
DIST_ES5=dist/bookmarklet.js
DIST_MIN=dist/bookmarklet.min.js

SRC_HTML=bookmarklet.html
DIST_HTML=dist/bookmarklet.html

mkdir -p dist
./node_modules/.bin/babel $SRC_JS > $DIST_ES5
./node_modules/.bin/jsmin $DIST_ES5 > $DIST_MIN

BOOKMARKLET_JS=`cat ${DIST_MIN}`
cat $SRC_HTML | ./node_modules/handlebars-cmd/index.js --CODE "$BOOKMARKLET_JS" > $DIST_HTML
