import { useState, useEffect } from "react";
import axios from "axios";

function RecommendationCard() {
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/recommendations")
      .then((response) => {
        setRecommendations(response.data.recommendations);
      })
      .catch((error) => {
        console.error(
          "Error fetching recommendations:",
          error
        );
      });
  }, []);

  return (
    <div>
      {recommendations.map((item, index) => (
        <div
          key={index}
          style={{
            background: "#fff",
            borderRadius: "12px",
            padding: "20px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
            marginBottom: "15px",
            borderLeft: `6px solid ${
              item.priority === "High"
                ? "#ef4444"
                : item.priority === "Medium"
                ? "#f59e0b"
                : "#16a34a"
            }`,
          }}
        >
          <h3>{item.title}</h3>

          <p>{item.description}</p>

          <p>
            <strong>Reduction:</strong>{" "}
            {item.potentialReduction}
          </p>

          <p>
            <strong>Savings:</strong>{" "}
            {item.estimatedSavings}
          </p>

          <p>
            <strong>Priority:</strong>{" "}
            {item.priority}
          </p>
        </div>
      ))}
    </div>
  );
}

export default RecommendationCard;