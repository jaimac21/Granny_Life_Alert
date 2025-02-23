#include <Wire.h>
#include <WiFi.h>
#include <HTTPClient.h>

const int MPU_addr=0x68;  // I2C address of the MPU-6050
int16_t AcX,AcY,AcZ,Tmp,GyX,GyY,GyZ;
float ax=0, ay=0, az=0, gx=0, gy=0, gz=0;
boolean fall = false; //stores if a fall has occurred
boolean trigger1=false; //stores if first trigger (lower threshold) has occurred
boolean trigger2=false; //stores if second trigger (upper threshold) has occurred
boolean trigger3=false; //stores if third trigger (orientation change) has occurred
byte trigger1count=0; //stores the counts past since trigger 1 was set true
byte trigger2count=0; //stores the counts past since trigger 2 was set true
byte trigger3count=0; //stores the counts past since trigger 3 was set true
int angleChange=0;
#define BUZZER_PIN 14
#define BUTTON 12
bool buzzer_on = false;
const char *ssid =  "IEEE@175";     // Replace with your WIFI SSID
const char *pass =  "connect@175"; // Replace with your WIFI PASSWORD
//Your Domain name with URL path or IP address with path
String serverName = "http://192.168.56.1:8000/lifeAlert/fallAlert";


// void send_event(const char *event);
// const char *host = "maker.ifttt.com";
// const char *privateKey = "gkb_HtIpE-FeOWMH20obLTvUR7_fPipDyj_hdTJF2od";

int fall_detect_time = 0;
int buzz_off_time = 0;
bool button_pressed = false;
const int SNOOZER_TIME = 8000; //8 seconds
bool request_sent = false;

void mpu_read();
void send_http();

void setup(){
  Serial.begin(115200);
  Wire.begin();
  Wire.beginTransmission(MPU_addr);
  Wire.write(0x6B);  // PWR_MGMT_1 register
  Wire.write(0);     // set to zero (wakes up the MPU-6050)
  Wire.endTransmission(true);
  pinMode(BUTTON, INPUT_PULLUP);
  pinMode(BUZZER_PIN, OUTPUT);

 //WiFi check
  WiFi.begin(ssid, pass);
  while (WiFi.status() != WL_CONNECTED)
  {
    delay(500);
    Serial.print(".");              
  }
  Serial.println("");
  Serial.println("WiFi connected");
  Serial.print("Connected to WiFi network with IP Address: ");
  Serial.println(WiFi.localIP());
}

void loop(){
  mpu_read();
  ax = (AcX-2050)/16384.00;
  ay = (AcY-77)/16384.00;
  az = (AcZ-1947)/16384.00;
  gx = (GyX+270)/131.07;
  gy = (GyY-351)/131.07;
  gz = (GyZ+136)/131.07;
  // calculating Amplitute vactor for 3 axis
  float raw_amplitude = pow(pow(ax,2)+pow(ay,2)+pow(az,2),0.5);
  int amplitude = raw_amplitude * 10;  // Mulitiplied by 10 bcz values are between 0 to 1
  Serial.println(amplitude);
  if (amplitude<=2 && trigger2==false){ //if AM breaks lower threshold (0.4g)
    trigger1=true;
    Serial.println("TRIGGER 1 ACTIVATED");
  }
  if (trigger1==true){
    trigger1count++;
    if (amplitude>=12){ //if AM breaks upper threshold (3g)
      trigger2=true;
      Serial.println("TRIGGER 2 ACTIVATED");
      trigger1=false; trigger1count=0;
      }
  }
  if (trigger2==true){
    trigger2count++;
    angleChange = pow(pow(gx,2)+pow(gy,2)+pow(gz,2),0.5); 
    Serial.println(angleChange);
    if (angleChange>=30 && angleChange<=400){ //if orientation changes by between 80-100 degrees
      trigger3=true; trigger2=false; trigger2count=0;
      Serial.println(angleChange);
      Serial.println("TRIGGER 3 ACTIVATED");
    }
  }
  if (trigger3==true){
    trigger3count++;
    if (trigger3count>=10){ 
      angleChange = pow(pow(gx,2)+pow(gy,2)+pow(gz,2),0.5);
      Serial.println(angleChange); 
        if ((angleChange>=0) && (angleChange<=10)){ //if orientation changes remains between 0-10 degrees
          fall=true; trigger3=false; trigger3count=0;
          fall_detect_time = millis();
          tone(BUZZER_PIN, 1000); // Play a 1kHz tone on the buzzer pin
          buzzer_on = true;
          Serial.println(angleChange);
        }
        else{ //user regained normal orientation
          trigger3=false; trigger3count=0;
          Serial.println("TRIGGER 3 DEACTIVATED");
        }
    }
  }

 if (fall==true){ //in event of a fall detection
    while((millis() - fall_detect_time) <= SNOOZER_TIME){ //check for false alarm over a 5 second loop
      if(digitalRead(BUTTON) == LOW){
        button_pressed = true;
        noTone(BUZZER_PIN); //turn it off as regular
        buzzer_on = false;
        fall = false;
      }
    }

    if(fall == true){ //if fall still true
      //send HTTP request
      //send_event("FALL DETECTION");  
      //request_sent = true;
      send_http();
      //fall = false;
    }

  }

  if (trigger2count>=6){ //allow 0.5s for orientation change
    trigger2=false; trigger2count=0;
    Serial.println("TRIGGER 2 DECACTIVATED");
  }
  if (trigger1count>=6){ //allow 0.5s for AM to break upper threshold
    trigger1=false; trigger1count=0;
    Serial.println("TRIGGER 1 DECACTIVATED");
  }
  delay(100);
   
}

void mpu_read(){
  Wire.beginTransmission(MPU_addr);
  Wire.write(0x3B);  // starting with register 0x3B (ACCEL_XOUT_H)
  Wire.endTransmission(false);
  Wire.requestFrom(MPU_addr,14,true);  // request a total of 14 registers
  AcX=Wire.read()<<8|Wire.read();  // 0x3B (ACCEL_XOUT_H) & 0x3C (ACCEL_XOUT_L)    
  AcY=Wire.read()<<8|Wire.read();  // 0x3D (ACCEL_YOUT_H) & 0x3E (ACCEL_YOUT_L)
  AcZ=Wire.read()<<8|Wire.read();  // 0x3F (ACCEL_ZOUT_H) & 0x40 (ACCEL_ZOUT_L)
  Tmp=Wire.read()<<8|Wire.read();  // 0x41 (TEMP_OUT_H) & 0x42 (TEMP_OUT_L)
  GyX=Wire.read()<<8|Wire.read();  // 0x43 (GYRO_XOUT_H) & 0x44 (GYRO_XOUT_L)
  GyY=Wire.read()<<8|Wire.read();  // 0x45 (GYRO_YOUT_H) & 0x46 (GYRO_YOUT_L)
  GyZ=Wire.read()<<8|Wire.read();  // 0x47 (GYRO_ZOUT_H) & 0x48 (GYRO_ZOUT_L)
}

void send_http(){

  while(request_sent == false){
        //check WiFi connection status
    if(WiFi.status() == WL_CONNECTED){
      WiFiClient client;
      HTTPClient http;

      // Your Domain name with URL path or IP address with path
      http.begin(client, serverName);
      //send fallen info
      //String serverPath = serverName + "?granny=fallen";
      //http.addHeader("Content-Type", "text/plain");
      //int httpResponseCode = http.POST("granny has fallen");
     
      // If you need an HTTP request with a content type: application/json, use the following:
      http.addHeader("Content-Type", "application/json");
      int httpResponseCode = http.POST("{\"email\":\"clobato315@gmail.com\",\"message\":\"Granny has fallen\"}");

      // // Your Domain name with URL path or IP address with path
      // http.begin(serverPath.c_str());
      // If you need Node-RED/server authentication, insert user and password below
      //http.setAuthorization("REPLACE_WITH_SERVER_USERNAME", "REPLACE_WITH_SERVER_PASSWORD");
        
      // Send HTTP GET request
      //int httpResponseCode = http.GET();
      if (httpResponseCode>0) {
        Serial.print("HTTP Response code: ");
        Serial.println(httpResponseCode);
        String payload = http.getString();
        Serial.println(payload);
        request_sent = true; //message was sent that granny fell
      }
      else {
        Serial.print("Error code: ");
        Serial.println(httpResponseCode);
        Serial.println("Retrying...");
      }
      // Free resources
      http.end();
    }
    else {
      Serial.println("URGENT: WiFi Disconnected; FATAL ERROR!");
    }
  }

  while(fall==true){ //while granny is still fallen and unattended to, check for button press to turn buzzer off
  // assume granny got help if buzzer off (so reset process checks and turn off buzzer)
    if((digitalRead(BUTTON) == LOW) && (request_sent == true)){
      Serial.println("button is pressed.");
      if(buzzer_on && (fall == false) ){
          noTone(BUZZER_PIN);
          buzzer_on = false;
          request_sent = false;
          fall = false;
          //buzz_off_time = millis();
      }
    }    
  }

}

// void send_event(const char *event)
// {
//   Serial.print("Connecting to "); 
//   Serial.println(host);
//   WiFiClient client;
//   const int httpPort = 80;
//   if (!client.connect(host, httpPort)) {
//     Serial.println("Connection failed");
//     return;
//   }
//   String url = "/trigger/";
//   url += event;
//   url += "/with/key/";
//   url += privateKey;
//   Serial.print("Requesting URL: ");
//   Serial.println(url);
//   client.print(String("GET ") + url + " HTTP/1.1\r\n" +
//                "Host: " + host + "\r\n" + 
//                "Connection: close\r\n\r\n");
//   while(client.connected())
//   {
//     if(client.available())
//     {
//       String line = client.readStringUntil('\r');
//       Serial.print(line);
//     } else {
//       delay(50);
//     };
//   }
//   Serial.println();
//   Serial.println("closing connection");
//   client.stop();
// }