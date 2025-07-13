echo "Switching to branch, main"
git checkout main

echo "Building app..."
npm run build

echo "Deploying files to server..."
scp -i ~/.ssh/ssh-key-2024-02-12.key -r dist/* ubuntu@129.151.216.198:/var/www/maef

echo "Done!"