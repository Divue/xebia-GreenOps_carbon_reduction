import { recommendations } from "../data/mockData";

function RecommendationCard() {
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