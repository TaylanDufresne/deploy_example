

# Import File Locations
// Nginx config for reverse-proxy 
/etc/nginx/sites-enabled

// Nginx directory holding static files
/var/www/html

# Important Commands
// Ports in use
sudo netstat -tulpn | grep LISTEN

// Ports allowed through the firewall
sudo ufw status

// Running processes
sudo pm2 status

// Start process
sudo pm2 start server_name.js -n process_name
