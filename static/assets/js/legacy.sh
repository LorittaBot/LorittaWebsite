for file in *.js; do
    mv "$file" "${file%.js}_legacy.js"
done
