import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Users, Clock, Trophy } from "lucide-react";

interface GameCardProps {
  title: string;
  description: string;
  players: string;
  duration: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  isPopular?: boolean;
  onPlay: () => void;
}

const GameCard = ({ 
  title, 
  description, 
  players, 
  duration, 
  difficulty, 
  isPopular = false,
  onPlay 
}: GameCardProps) => {
  const difficultyColors = {
    Easy: 'bg-success text-white',
    Medium: 'bg-warning text-accent-foreground',
    Hard: 'bg-destructive text-white'
  };

  return (
    <Card className="group bg-gaming-surface border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow-primary hover:-translate-y-1">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>
          {isPopular && (
            <Badge className="bg-gradient-accent text-accent-foreground font-semibold">
              <Trophy className="w-3 h-3 mr-1" />
              Popular
            </Badge>
          )}
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>
      </CardHeader>
      
      <CardContent className="pb-4">
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            <span>{players}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{duration}</span>
          </div>
          <Badge className={`text-xs ${difficultyColors[difficulty]}`}>
            {difficulty}
          </Badge>
        </div>
      </CardContent>
      
      <CardFooter>
        <Button 
          onClick={onPlay}
          variant="gaming"
          className="w-full font-semibold"
        >
          Play Now
        </Button>
      </CardFooter>
    </Card>
  );
};

export default GameCard;