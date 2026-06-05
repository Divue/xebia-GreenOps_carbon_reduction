import json


class ResourceLoader:

    def __init__(self, path: str):

        with open(path) as f:
            self.data = json.load(f)

    def get_resource(self, category, resource_type):

        return self.data[category][resource_type]

    def get_region(self, region):

        return self.data["regions"][region]