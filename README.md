# wifi-login-linux-script
Use these scripts to login to your IIIT Dharwad wifi automatically when connected to wifi - Ubuntu


## How to -

Setup the shell file 

```bash
  chmod +x custom_wifi_connect.sh
```

Where to keep the `.service` file 

```bash
  /etc/systemd/system
```

Steps to start the service 
```bash
  sudo systemctl daemon-reload
  sudo systemctl enable custom_wifi_connect.service
  sudo systemctl start custom_wifi_connect.service
```
