import { CheckIcon } from "@radix-ui/react-icons"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

interface Plan {
    name: string;
    price: string;
    features: string[];
    cta: string;
    addOns?: {
        title: string;
        description: string;
    }[];
}

interface PrizeModelProps {
    className?: string;
    API: Plan[];
}

export function PrizeModel({ className, API }: PrizeModelProps) {
    return (
        <div className={cn("flex items-stretch justify-center flex-wrap  gap-4 ", className)}>
            {API.map((plan, index) => (
                <Card key={index} className={cn("w-[380px] flex flex-col", className)}>
                    <CardHeader>
                        <CardTitle>{plan.name}</CardTitle>
                        <CardDescription>{plan.price}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1 grid gap-4">
                        <ul className="text-sm text-muted-foreground space-y-1">
                            {plan.features.map((feature, i) => (
                                <li key={i} className="flex items-center">
                                    <CheckIcon className="mr-2 h-4 w-4 text-green-500" />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                        {plan.addOns && (
                            <div>
                                <p className="font-medium mt-4">Add-Ons:</p>
                                <ul className="text-sm text-muted-foreground space-y-1">
                                    {plan.addOns.map((addOn, i) => (
                                        <li key={i} className="flex items-center">
                                            <CheckIcon className="mr-2 h-4 w-4 text-green-500" />
                                            <strong>{addOn.title}: </strong> {addOn.description}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </CardContent>
                    <CardFooter className="mt-auto">
                        <Button className="w-full bg-gray-800 text-white hover:bg-gray-700 hover:text-white" variant={'outline'}>
                            <CheckIcon className="mr-2 h-4 w-4" /> {plan.cta}
                        </Button>
                    </CardFooter>
                </Card>
            ))}
        </div>
    )
}
