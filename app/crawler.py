from firebase import firebase
from rotten_tomatoes_client import RottenTomatoesClient

class FirebaseAPI(object):
    def __init__(self):
        url = "https://movie-36dea.firebaseio.com/"
        self.fb = firebase.FirebaseApplication(url, None)

    def getMovies(self, n=10):
        numberOfItem = str(n)
        para = {
            "orderBy":"\"name\"",
            "LimitToFirst":numberOfItem
        }
        result = self.fb.get("/movie", None, params=para)
        return [result[k] for k in result] 
fb = FirebaseAPI()


