# things.py

# Let's get this party started!
import falcon
import json

# Falcon follows the REST architectural style, meaning (among
# other things) that you think in terms of resources and state
# transitions, which map to HTTP verbs.
class PlanResource(object):

    def on_options(self, req, resp):
        resp.append_header("Access-Control-Allow-Headers", "Content-Type")
        resp.append_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        resp.append_header("Access-Control-Allow-Origin", "*")
        resp.status = falcon.HTTP_200

    def on_get(self, req, resp):
        result = {
            'msg' : 'Under Construction'
        }

        resp.append_header("Access-Control-Allow-Origin", "*")
        resp.status = falcon.HTTP_200
        resp.body = json.dumps(result)

    def on_post(self, req, resp):
        result = {
            'msg' : 'Under Construction'
        }

        resp.append_header("Access-Control-Allow-Origin", "*")
        resp.status = falcon.HTTP_200
        resp.body = json.dumps(result)

# falcon.API instances are callable WSGI apps
app = falcon.API()

# Resources are represented by long-lived class instances
plan = PlanResource()

# things will handle all requests to the '/things' URL path
app.add_route('/plan', plan)
