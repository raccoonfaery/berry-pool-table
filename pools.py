import requests
from flask import Flask, request, render_template
import json
from xml.etree import ElementTree as ET

# not same origin so can't use only javascript
pool_info_data = requests.get("https://raw.githubusercontent.com/devdattakulkarni/elements-of-web-programming/master/data/austin-pool-timings.xml")
pool_info_root = ET.fromstring(pool_info_data.text)

app = Flask(__name__)

# pools table page
@app.route("/pools")
def greet():
	allpools = []
	for pool in pool_info_root.findall("row"):
		pooly = {"Pool_name": pool.find("pool_name").text, "Pool_type": pool.find("pool_type").text, "Status": pool.find("status").text, "Weekday_closure": pool.find("weekday_closure").text}
		allpools.append(pooly)
	return json.dumps(allpools)

# welcome page
@app.route("/")
def social_distancing():
	return render_template("index.html")

if __name__ == "__main__":
	app.run()
