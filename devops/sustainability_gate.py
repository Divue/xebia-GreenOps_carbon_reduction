import json
import sys

def run_sustainability_check():
    print("====================================================")
    print("🚀 XEBIA GREENOPS: AUTOMATED CI/CD SHIFT-LEFT GATE")
    print("====================================================\n")
    
    try:
        with open("devops/mock_deployment.json", "r") as f:
            config = json.load(f)
    except FileNotFoundError:
        print("❌ Error: mock_deployment.json not found.")
        sys.exit(1)

    project_name = config.get("projectName", "Unknown Project")
    region = config.get("targetRegion", "unknown")
    vm_hours = config.get("requestedVMHours", 0)
    
    print(f"Scanning Deployment Manifest for: '{project_name}'")
    print(f"Target Region: {region.upper()}")
    print(f"Requested VM Scale: {vm_hours} hours\n")

    high_carbon_regions = ["us-east-1", "ap-south-1"]
    
    if region in high_carbon_regions and vm_hours > 1000:
        print("----------------------------------------------------")
        print("❌ STATUS: CRITICAL / WARNING")
        print("GRADE: D")
        print(f"Message: Carbon threshold exceeded for project '{project_name}'.")
        print(f"Violation: Deploying heavy workloads ({vm_hours} hrs) in carbon-heavy grid '{region}'.")
        print("💡 Action Required: Shift-Left your infrastructure to a greener region (e.g., eu-west-1).")
        print("----------------------------------------------------")
        sys.exit(1) 
    else:
        print("----------------------------------------------------")
        print("✅ STATUS: PASS")
        print("GRADE: A")
        print("Message: Sustainability target met. Infrastructure optimized.")
        print("----------------------------------------------------")
        sys.exit(0)

if __name__ == "__main__":
    run_sustainability_check()
