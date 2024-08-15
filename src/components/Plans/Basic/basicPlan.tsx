import { PrizeModel } from "../prizeModel"

function BasicPlan() {
    const API = [
        {
            name: "Basic Plan",
            price: "$49/month per user",
            features: [
                "Limited projects",
                "Basic API integrations",
                "Standard templates",
                "Basic AI analysis",
                "Limited support"
            ],
            cta: "Get Started"
        },
        {
            name: "Professional Plan",
            price: "$149/month per user",
            features: [
                "More projects",
                "Advanced API integrations",
                "Full template library",
                "Customizable workflows",
                "Advanced AI analysis",
                "Priority support"
            ],
            cta: "Upgrade Now"
        },
        {
            name: "Enterprise Plan",
            price: "Custom pricing",
            features: [
                "Unlimited projects",
                "Full API integrations",
                "Custom templates",
                "Comprehensive AI analysis",
                "Dedicated account manager",
                "Premium support"
            ],
            cta: "Contact Us for Pricing",
            addOns: [
                {
                    title: "Advanced Data Sources",
                    description: "Access premium data from Bloomberg, FactSet, and others for an additional fee."
                },
                {
                    title: "Extra Storage",
                    description: "Add more storage for document management as your needs grow."
                }
            ]
        }
    ]
    return (
        <PrizeModel API={API} />
    )
}

export default BasicPlan
