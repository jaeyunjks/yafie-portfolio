export const freshBasketLinks = {
  previewImage: "/images/projects/AWS/freshbasket-preview.png",
  github: "https://github.com/jaeyunjks/AWSFreshBasket",
};

type EvidenceAspectRatio = "16/9" | "4/3" | "3/2" | "wide" | "console";
type EvidenceObjectFit = "contain" | "cover";

type FreshBasketEvidenceItem = {
  title: string;
  image: string;
  category: string;
  caption: string;
  aspectRatio: EvidenceAspectRatio;
  objectFit: EvidenceObjectFit;
};

export const freshBasketNotice =
  "This project was deployed in an AWS Academy Learner Lab environment for assessment purposes. The live environment is no longer active, but the deployment is documented through architecture diagrams, AWS configuration screenshots, database connection evidence, and application screenshots.";

export const freshBasketPills = [
  "Role: Cloud Deployment / Full-Stack Deployment",
  "Platform: AWS Academy Learner Lab",
  "Stack: Node.js - Express - EJS - MySQL",
  "Services: Elastic Beanstalk - EC2 - RDS - VPC - SNS",
];

export const freshBasketContextCards = [
  {
    title: "Customer workflow",
    body: "Customers browse seasonal produce, build a harvest box, review totals, and submit produce box requests.",
  },
  {
    title: "Admin workflow",
    body: "Admin users monitor request metrics, fulfilment status, and customer box requests.",
  },
  {
    title: "Database-backed app",
    body: "Produce items, box requests, and request line items are stored in MySQL-backed tables.",
  },
  {
    title: "Deployment focus",
    body: "The case study focuses on AWS configuration, database connectivity, scaling setup, and evidence capture.",
  },
];

export const freshBasketArchitectureFlow = [
  "User Browser",
  "Application Load Balancer",
  "Elastic Beanstalk Environment",
  "EC2 Application Instances",
  "RDS MySQL Database",
];

export const freshBasketSupportingServices = [
  "Custom VPC",
  "Public Subnets",
  "Route Table",
  "Internet Gateway",
  "Security Groups",
  "IAM LabRole / LabInstanceProfile",
  "SNS Email Notifications",
  "Environment Variables",
];

export const freshBasketDeploymentSteps = [
  {
    title: "Prepare app",
    body: "Prepared the Node.js, Express, EJS, and MySQL application for cloud deployment with environment-driven configuration.",
  },
  {
    title: "Create AWS network",
    body: "Configured VPC networking, public subnets, route table access, Internet Gateway routing, and security groups.",
  },
  {
    title: "Configure RDS MySQL",
    body: "Created the RDS MySQL database and aligned credentials, port access, and connection settings.",
  },
  {
    title: "Build EC2 / custom AMI",
    body: "Used EC2 setup and a custom AMI to support the application runtime and deployment evidence.",
  },
  {
    title: "Deploy with Elastic Beanstalk",
    body: "Deployed the application through a load-balanced Elastic Beanstalk environment.",
  },
  {
    title: "Configure environment variables",
    body: "Set database host, port, username, password, and application configuration through environment variables.",
  },
  {
    title: "Validate database connection",
    body: "Verified application and EC2 terminal access to RDS MySQL records through SQL queries.",
  },
  {
    title: "Capture evidence",
    body: "Captured architecture diagrams, AWS configuration screenshots, database connection proof, and application screenshots.",
  },
];

export const freshBasketDatabaseTables = [
  "produce_items",
  "box_requests",
  "box_request_items",
];

export const freshBasketNetworkingCards = [
  // TODO before public deployment: manually blur/crop AWS account IDs,
  // endpoints, public IPs, security group IDs, emails, and credentials in these screenshots.
  {
    title: "Custom VPC",
    body: "Hosted deployment resources inside a controlled AWS networking boundary.",
    image: "/images/projects/AWS/vpc-networking.png",
    caption: "VPC-level view showing the network boundary used for the AWS deployment.",
  },
  {
    title: "Public subnets",
    body: "Provided public subnet placement for application-facing resources.",
    image: "/images/projects/AWS/vpc-public-subnets.png",
    caption: "Public subnet evidence used for the application-facing deployment resources.",
  },
  {
    title: "Route table + Internet Gateway",
    body: "Enabled web access through route table and gateway configuration.",
    image: "/images/projects/AWS/vpc-route-table.png",
    caption: "Route table evidence showing public internet routing for the deployment.",
  },
  {
    title: "Security groups",
    body: "Allowed HTTP access to the application while restricting MySQL access to the app security group.",
    image: "/images/projects/AWS/security-groups.png",
    caption: "Security group evidence for application and database access control.",
  },
];

export const freshBasketOperationsCards = [
  "Load-balanced environment",
  "Min instances: 2",
  "Max instances: 8",
  "EC2 instance profile / service role",
  "Custom AMI",
  "Environment variables",
  "Health monitoring and events",
];

export const freshBasketOperationsImages = [
  // TODO before public deployment: manually blur/crop AWS account IDs,
  // endpoints, public IPs, IAM details, environment values, emails, and credentials.
  {
    title: "Elastic Beanstalk Health",
    image: "/images/projects/AWS/beanstalk-health-ok.png",
    caption: "Shows the Elastic Beanstalk environment reaching an OK health state.",
  },
  {
    title: "Scaling Configuration",
    image:
      "/images/projects/AWS/beanstalk-scaling-config.png",
    caption: "Documents Auto Scaling capacity settings for the load-balanced environment.",
  },
  {
    title: "Custom AMI",
    image: "/images/projects/AWS/custom-ami.png",
    caption: "Shows the custom AMI evidence used during the deployment setup.",
  },
];

export const freshBasketEvidenceItems: FreshBasketEvidenceItem[] = [
  // TODO before public deployment: manually blur/crop any sensitive
  // identifiers, endpoints, account details, emails, credentials, public IPs,
  // SNS ARNs, environment values, or unrelated browser tabs in these evidence images.
  {
    title: "Architecture Diagram",
    image: "/images/projects/AWS/architecture-diagram.png",
    category: "AWS Deployment",
    caption: "High-level architecture diagram showing the deployed app, AWS services, and database path.",
    aspectRatio: "wide",
    objectFit: "contain",
  },
  {
    title: "Elastic Beanstalk Health",
    image: "/images/projects/AWS/beanstalk-health-ok.png",
    category: "AWS Deployment",
    caption: "Evidence that the Elastic Beanstalk environment reached a healthy deployment state.",
    aspectRatio: "16/9",
    objectFit: "contain",
  },
  {
    title: "FreshBasket Landing Page",
    image: "/images/projects/AWS/app-landing.png",
    category: "App",
    caption: "Application landing page evidence showing the deployed FreshBasket user interface.",
    aspectRatio: "16/9",
    objectFit: "cover",
  },
  {
    title: "Customer Builder Flow",
    image: "/images/projects/AWS/app-builder.png",
    category: "App",
    caption: "Customer produce-box builder flow running through the deployed web application.",
    aspectRatio: "16/9",
    objectFit: "cover",
  },
  {
    title: "Admin Operations Dashboard",
    image:
      "/images/projects/AWS/app-admin-dashboard.png",
    category: "App",
    caption: "Admin dashboard evidence for request monitoring and operations visibility.",
    aspectRatio: "16/9",
    objectFit: "cover",
  },
  {
    title: "RDS MySQL Configuration",
    image: "/images/projects/AWS/rds-configuration.png",
    category: "Database",
    caption: "RDS MySQL configuration evidence for the database backing the deployed app.",
    aspectRatio: "console",
    objectFit: "contain",
  },
  {
    title: "EC2 to RDS SQL Query",
    image: "/images/projects/AWS/ec2-rds-sql-query.png",
    category: "Database",
    caption: "EC2 terminal query evidence verifying produce and request records in RDS MySQL.",
    aspectRatio: "console",
    objectFit: "contain",
  },
  {
    title: "Security Groups",
    image: "/images/projects/AWS/security-groups.png",
    category: "Security",
    caption: "Security group evidence showing access control for web and database traffic.",
    aspectRatio: "console",
    objectFit: "contain",
  },
  {
    title: "VPC Networking",
    image: "/images/projects/AWS/vpc-networking.png",
    category: "Networking",
    caption: "VPC networking evidence showing how deployment resources were grouped.",
    aspectRatio: "3/2",
    objectFit: "contain",
  },
  {
    title: "SNS Notification",
    image: "/images/projects/AWS/sns-confirmation.png",
    category: "Notification",
    caption: "SNS email subscription confirmation evidence for notification setup.",
    aspectRatio: "16/9",
    objectFit: "contain",
  },
];

export const freshBasketTroubleshootingCards = [
  {
    title: "Region restriction",
    body: "AWS Academy required us-east-1, so deployment resources were rebuilt in the supported region.",
  },
  {
    title: "RDS connectivity",
    body: "Fixed host, port, credentials, environment variables, and security group access.",
  },
  {
    title: "Elastic Beanstalk health",
    body: "Resolved health/runtime issues by checking environment variables, events, and application startup behaviour.",
  },
  {
    title: "Security group access",
    body: "Restricted RDS access to the application security group on port 3306.",
  },
];

export const freshBasketReflectionCards = [
  {
    title: "Cloud deployment is system thinking",
    body: "The app, database, networking, roles, scaling, and runtime configuration all had to work together.",
  },
  {
    title: "Environment variables matter",
    body: "Cloud deployments depend on clean configuration boundaries between code and infrastructure settings.",
  },
  {
    title: "Networking affects application behaviour",
    body: "Security groups, routes, subnets, and database access rules directly shaped whether the app could run.",
  },
  {
    title: "Evidence matters when environments expire",
    body: "Screenshots, diagrams, and connection proof preserve the deployment story after lab resources shut down.",
  },
];
