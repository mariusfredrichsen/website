echo "Switching to branch, main"
git checkout main

echo "Building app..."
npm run build

echo "Deploying files to server..."
scp -i "C:\Users\mariu\Skrivebord\MariusServer\oracle.key" -r dist/* ubuntu@79.76.40.129:/var/www/maef

echo "Done!"