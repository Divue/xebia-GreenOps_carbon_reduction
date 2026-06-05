import { recommendations } from "../data/mockData";

function RecommendationCard() {
  return (
    <div>
      {recommendations.map((item, index) => (
        <div
          key={index}
          style={{
            border: "1px solid #ddd",
            borderRadius: "10px",
            padding: "15px",
            marginBottom: "15px",
            background: "#fff",
          }}
        >
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <p>
            <strong>Reduction:</strong> {item.potentialReduction}
          </p>
          <p>
            <strong>Savings:</strong> {item.estimatedSavings}
          </p>
          <p>
            <strong>Priority:</strong> {item.priority}
          </p>
        </div>
      ))}
    </div>
  );
}

export default RecommendationCard;