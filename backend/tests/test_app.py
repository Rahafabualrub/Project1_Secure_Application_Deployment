import os

os.environ["DATABASE_URL"] = "sqlite:///:memory:"

from server import app


def test_health():
    client = app.test_client()
    response = client.get("/health")
    assert response.status_code == 200
    assert response.json["status"] == "ok"
