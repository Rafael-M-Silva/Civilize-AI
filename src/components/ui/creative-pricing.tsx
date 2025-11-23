import { Button } from "./button";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface PricingTier {
    name: string;
    icon: React.ReactNode;
    price: number;
    coins: number;
    description: string;
    features: string[];
    popular?: boolean;
    color: string;
}

function CreativePricing({
    tag = "Pacotes de LizeCoins",
    title = "Desbloqueie mais cursos",
    description = "Escolha o pacote ideal para você",
    tiers,
    onSelectPlan,
}: {
    tag?: string;
    title?: string;
    description?: string;
    tiers: PricingTier[];
    onSelectPlan?: (tier: PricingTier) => void;
}) {
    return (
        <div className="w-full max-w-6xl mx-auto px-4">
            <div className="text-center space-y-6 mb-16">
                <div className="text-xl text-blue-500 rotate-[-1deg]">
                    {tag}
                </div>
                <div className="relative">
                    <h2 className="text-4xl md:text-5xl rotate-[-1deg]">
                        {title}
                        <div className="absolute -right-12 top-0 text-amber-500 rotate-12">
                            ✨
                        </div>
                        <div className="absolute -left-8 bottom-0 text-blue-500 -rotate-12">
                            ⭐️
                        </div>
                    </h2>
                    <div
                        className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-44 h-3 bg-blue-500/20 
                        rotate-[-1deg] rounded-full blur-sm"
                    />
                </div>
                <p className="text-xl text-zinc-600 dark:text-zinc-400 rotate-[-1deg]">
                    {description}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {tiers.map((tier, index) => (
                    <div
                        key={tier.name}
                        className={cn(
                            "relative group",
                            "transition-all duration-300",
                            index === 0 && "rotate-[-1deg]",
                            index === 1 && "rotate-[1deg]"
                        )}
                    >
                        <div
                            className={cn(
                                "absolute inset-0 bg-white dark:bg-zinc-900",
                                "border-2 border-zinc-900 dark:border-white",
                                "rounded-lg shadow-[4px_4px_0px_0px] shadow-zinc-900 dark:shadow-white",
                                "transition-all duration-300",
                                "group-hover:shadow-[8px_8px_0px_0px]",
                                "group-hover:translate-x-[-4px]",
                                "group-hover:translate-y-[-4px]"
                            )}
                        />

                        <div className="relative p-6">
                            {tier.popular && (
                                <div
                                    className="absolute -top-2 -right-2 bg-amber-400 text-zinc-900 
                                    px-3 py-1 rounded-full rotate-12 text-sm border-2 border-zinc-900"
                                >
                                    Popular!
                                </div>
                            )}

                            <div className="mb-6">
                                <div
                                    className={cn(
                                        "w-12 h-12 rounded-full mb-4",
                                        "flex items-center justify-center",
                                        "border-2 border-zinc-900 dark:border-white",
                                        tier.color === "amber" && "bg-amber-100 dark:bg-amber-900/30",
                                        tier.color === "blue" && "bg-blue-100 dark:bg-blue-900/30"
                                    )}
                                >
                                    {tier.icon}
                                </div>
                                <h3 className="text-2xl text-zinc-900 dark:text-white">
                                    {tier.name}
                                </h3>
                                <p className="text-zinc-600 dark:text-zinc-400">
                                    {tier.description}
                                </p>
                            </div>

                            {/* Price */}
                            <div className="mb-6">
                                <div className="flex items-baseline gap-2">
                                    <span className="text-4xl font-bold text-zinc-900 dark:text-white">
                                        R$ {tier.price}
                                    </span>
                                </div>
                                <div className="text-lg text-zinc-600 dark:text-zinc-400 mt-1">
                                    {tier.coins} LizeCoins
                                </div>
                            </div>

                            <div className="space-y-3 mb-6">
                                {tier.features.map((feature) => (
                                    <div
                                        key={feature}
                                        className="flex items-center gap-3"
                                    >
                                        <div
                                            className="w-5 h-5 rounded-full border-2 border-zinc-900 
                                            dark:border-white flex items-center justify-center"
                                        >
                                            <Check className="w-3 h-3" />
                                        </div>
                                        <span className="text-lg text-zinc-900 dark:text-white">
                                            {feature}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <Button
                                onClick={() => onSelectPlan?.(tier)}
                                className={cn(
                                    "w-full h-12 text-lg relative",
                                    "border-2 border-zinc-900 dark:border-white",
                                    "transition-all duration-300",
                                    "shadow-[4px_4px_0px_0px] shadow-zinc-900 dark:shadow-white",
                                    "hover:shadow-[6px_6px_0px_0px]",
                                    "hover:translate-x-[-2px] hover:translate-y-[-2px]",
                                    tier.popular
                                        ? [
                                              "bg-amber-400 text-zinc-900",
                                              "hover:bg-amber-300",
                                              "active:bg-amber-400",
                                              "dark:hover:bg-amber-300",
                                              "dark:active:bg-amber-400",
                                          ]
                                        : [
                                              "bg-zinc-50 dark:bg-zinc-800",
                                              "text-zinc-900 dark:text-white",
                                              "hover:bg-white dark:hover:bg-zinc-700",
                                              "active:bg-zinc-50 dark:active:bg-zinc-800",
                                          ]
                                )}
                            >
                                Comprar Agora
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="absolute -z-10 inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-40 left-20 text-4xl rotate-12">
                    ✎
                </div>
                <div className="absolute bottom-40 right-20 text-4xl -rotate-12">
                    ✏️
                </div>
            </div>
        </div>
    );
}

export { CreativePricing };
export type { PricingTier };