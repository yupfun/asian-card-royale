import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => {
  return (
    <Card className="bg-gaming-elevated border-border hover:border-primary/30 transition-all duration-300 group">
      <CardContent className="p-6 text-center">
        <div className="mx-auto w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:animate-float">
          <Icon className="w-6 h-6 text-primary-foreground" />
        </div>
        <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;