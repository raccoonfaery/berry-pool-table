import requests
from flask import Flask, request, render_template
import json
from xml.etree import ElementTree as ET

# not same origin so can't use only javascript
pool_info_data = requests.get("https://raw.githubusercontent.com/devdattakulkarni/elements-of-web-programming/master/data/austin-pool-timings.xml")
pool_info_root = ET.fromstring(pool_info_data.text)

app = Flask(__name__)

added_pools = []

# pools table page
@app.route("/pools")
def greet():
	allpools = []
	for pool in pool_info_root.findall("row"):
		pooly = {"Pool_name": pool.find("pool_name").text, "Pool_type": pool.find("pool_type").text, "Status": pool.find("status").text}
		allpools.append(pooly)
	allpools.extend(added_pools)
	return json.dumps(allpools)

@app.route("/", methods = ["GET", "POST"])
def add_pool():
	if request.method == "POST":
		# acquire the input from form
		pool_name = request.form["pool_name"]
		status = request.form["status"]
		pool_type = request.form["pool_type"]

		pooly = {"Pool_name": pool_name, "Pool_type": pool_type, "Status": status}
		added_pools.append(pooly)
		return render_template("pool_added.html")

	return render_template("index.html")

"""
# welcome page
@app.route("/", methods = ["GET"])
def social_distancing():
	return render_template("index.html")
"""

if __name__ == "__main__":
	app.run()
