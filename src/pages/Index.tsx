import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import GameCard from "@/components/GameCard";
import FeatureCard from "@/components/FeatureCard";
import { 
  Gamepad2, 
  Users, 
  Zap, 
  Shield, 
  Coins, 
  Trophy,
  Globe,
  MessageCircle,
  Star,
  Play,
  Download
} from "lucide-react";
import heroImage from "@/assets/hero-gaming.jpg";

const Index = () => {
  const games = [
    {
      title: "Cát Tê",
      description: "Traditional Vietnamese trick-taking card game with elimination rounds. Strategic gameplay for 2-6 players.",
      players: "2-6 Players",
      duration: "15-20 min",
      difficulty: "Medium" as const,
      isPopular: true,
    },
    {
      title: "Battle / War", 
      description: "Classic highest-card wins game. Perfect for quick casual matches between friends.",
      players: "2 Players",
      duration: "5-10 min", 
      difficulty: "Easy" as const,
    },
    {
      title: "Tiến Lên",
      description: "Popular Vietnamese Big Two variant. Shed all cards to win in this strategic climbing game.",
      players: "2-4 Players",
      duration: "20-30 min",
      difficulty: "Hard" as const,
    },
    {
      title: "Mậu Binh",
      description: "Chinese Poker variant where you arrange 13 cards into three hands. Skill meets strategy.",
      players: "2-4 Players", 
      duration: "10-15 min",
      difficulty: "Medium" as const,
    }
  ];

  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Sub-120ms latency for buttery-smooth real-time multiplayer across all regions."
    },
    {
      icon: Shield,
      title: "Secure & Fair",
      description: "Cryptographically secure shuffles with verifiable seeds and advanced anti-cheat protection."
    },
    {
      icon: Coins,
      title: "YUPFUN Ready",
      description: "Native crypto integration with Solana wallets for tournaments and premium tables."
    },
    {
      icon: Users,
      title: "Social Gaming",
      description: "Clubs, friends, chat, and tournaments. Build your gaming community and climb the leaderboards."
    },
    {
      icon: Globe,
      title: "Global Play",
      description: "Multi-regional servers with localization for Vietnamese, Chinese, Thai, Hindi, and more."
    },
    {
      icon: Trophy,
      title: "Competitive",
      description: "Ranked ladders, MMR system, and weekly tournaments with real prizes and glory."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-surface">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Asian card games in futuristic digital space"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background"></div>
        </div>
        
        <div className="relative container mx-auto px-4 pt-20 pb-32">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-gradient-accent text-accent-foreground font-semibold px-4 py-2">
              <Star className="w-4 h-4 mr-2" />
              The Future of Asian Card Gaming
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent leading-tight">
              Play. Compete. Win.
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              The fastest, most fun social card-gaming app for Asian classics. 
              Play with friends, compete in tournaments, and win with YUPFUN crypto.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <Button 
          size="lg" 
          variant="gaming"
          className="text-lg px-8 py-6 animate-glow-pulse"
        >
                <Play className="w-5 h-5 mr-2" />
                Play Now - Free
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary/30 text-primary hover:bg-primary/10 text-lg px-8 py-6"
              >
                <Download className="w-5 h-5 mr-2" />
                Download App
              </Button>
            </div>
            
            <div className="mt-12 flex items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
                <span>100K+ Active Players</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                <span>YUPFUN Integrated</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Game Catalog */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Game <span className="bg-gradient-primary bg-clip-text text-transparent">Catalog</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Master classic Asian card games with modern multiplayer features
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {games.map((game, index) => (
              <GameCard
                key={index}
                title={game.title}
                description={game.description} 
                players={game.players}
                duration={game.duration}
                difficulty={game.difficulty}
                isPopular={game.isPopular}
                onPlay={() => console.log(`Playing ${game.title}`)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 bg-gaming-surface">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Built for <span className="bg-gradient-accent bg-clip-text text-transparent">Champions</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Enterprise-grade gaming infrastructure meets social card gaming
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* YUPFUN Integration */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="bg-gradient-surface border border-accent/20 rounded-2xl p-8 md:p-12">
            <div className="w-16 h-16 bg-gradient-accent rounded-2xl mx-auto mb-6 flex items-center justify-center animate-float">
              <Coins className="w-8 h-8 text-accent-foreground" />
            </div>
            
            <h2 className="text-4xl font-bold mb-4">
              Powered by <span className="bg-gradient-accent bg-clip-text text-transparent">YUPFUN</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Experience true crypto gaming with non-custodial wallets, transparent prize pools, 
              and verifiable fair play. Connect your Phantom, Solflare, or OKX wallet to get started.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-accent mb-1">$50K+</div>
                <div className="text-muted-foreground">Daily Prize Pool</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent mb-1">1000+</div>
                <div className="text-muted-foreground">Daily Tournaments</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent mb-1">0.5%</div>
                <div className="text-muted-foreground">Platform Fee</div>
              </div>
            </div>
            
        <Button 
          size="lg"
          variant="premium"
        >
              Connect Wallet
            </Button>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <footer className="py-16 px-4 border-t border-border">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Playing?</h2>
          <p className="text-muted-foreground mb-8">
            Join thousands of players in the ultimate Asian card gaming experience
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button size="lg" variant="gaming">
          <Gamepad2 className="w-5 h-5 mr-2" />
          Play Free Now
        </Button>
            <Button variant="outline" size="lg" className="border-primary/30 text-primary">
              <MessageCircle className="w-5 h-5 mr-2" />
              Join Discord
            </Button>
          </div>
          
          <div className="mt-8 text-sm text-muted-foreground">
            Available on iOS 15+ and Android SDK 26+ • Age 18+ required for YUPFUN features
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;