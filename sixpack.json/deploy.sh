echo "Switching to branch, main"
git checkout main

echo "Deploying files to server..."
SOURCE_DIR="./"
DESTINATION_USER="ubuntu"
DESTINATION_HOST="129.151.216.198"
DESTINATION_PATH="/var/www/maef/SixpackCompose/"
EXCLUDE_DIR="node_modules"
SSH_KEY_PATH="~/.ssh/ssh-key-2024-02-12.key"

# Copy files excluding the specified directory
find $SOURCE_DIR -mindepth 1 -name $EXCLUDE_DIR -prune -o -type f -print0 | xargs -0 -I {} scp -i $SSH_KEY_PATH {} ${DESTINATION_USER}@${DESTINATION_HOST}:${DESTINATION_PATH}/{}

# Copy subdirectories excluding the specified directory
find $SOURCE_DIR -mindepth 1 -name $EXCLUDE_DIR -prune -o -type d -print | while read -r dir; do
    scp -i $SSH_KEY_PATH -r "$dir" ${DESTINATION_USER}@${DESTINATION_HOST}:${DESTINATION_PATH}/"$(basename "$dir")"
done

echo "Done!"