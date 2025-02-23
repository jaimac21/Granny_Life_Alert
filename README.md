# Granny_Life_Alert
# Karen Cho, Jaima Choudhury, Amshi Sivarajah, Chris Lobato 

## Description
IoT project that uses the 90s Life Alert as inspiration to build a device that detects falls and sends WhatsApp and Email Alerts


## Features
- Creating/Configure Account on Webapp 
- Fall Detection with IMU w/ on-board feedback
- Automated to emergency contacts using WhatsApp and Gmail

## Installation and Getting Started
### ESP32
- An ESP32 is required for this project as well as MPU 6050, Piezo Buzzer, and Push Button
- Arduino IDE with HTTP client libraries are required
- Change Wifi SSID and password to network of choice for ESP32 to connect to wifi
- Due to time constraints an Email is hardcoded for sending post request for alerts; this should be modified to user instance saved on mongodb
- Code contained in fall_detection_code_3.0 folder

### Web App and Webserver
- Node/npm are required for this project
- MongoDB instance running on uri mongodb://127.0.0.1:27017/HopperHacks
- WhatsAPI access and API key; should be modified with users own API Key
- Gmail App password (for sending automated emails); should be modified with Users API key
- Starting Front end
  ```sh
  cd Frontend
  npm install
  node run dev
  ```
- Starting Backend 
  ```sh
  cd Backend
  npm install
  node server.js
  ```
