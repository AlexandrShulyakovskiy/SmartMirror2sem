
import time
import Adafruit_DHT as dht

sensor1 = 22
pin1 = 14
sensor2 = 11
pin2 = 4

while True:
    humidity, temperature = dht.read_retry(sensor1, pin1)
    if (humidity is not None) and (temperature is not None):
        print("=========DHT22========")
        print("{0:8.2f}C   {1:8.2f}%" .format(temperature,humidity))
    humidity, temperature = dht.read_retry(sensor2, pin2)
    if (humidity is not None) and (temperature is not None):
        print("=========DHT11========")
        print("{0:8.2f}C   {1:8.2f}%" .format(temperature,humidity))
        time.sleep(2)
