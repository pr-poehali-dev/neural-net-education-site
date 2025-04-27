import { Button } from "@/components/ui/button";
import { Brain, BookOpen, GraduationCap, LightbulbIcon } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="py-20 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-accent/30 to-background">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <div className="mb-6 inline-flex items-center justify-center p-2 bg-primary/10 rounded-full">
            <Brain className="h-8 w-8 text-primary" />
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 animate-fade-in">
            Нейросети для учебы и образования
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Создавайте презентации, доклады и тесты с помощью искусственного интеллекта
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button asChild size="lg" className="rounded-full">
              <Link to="/presentations">Начать работу с ИИ</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full">
              <Link to="/about">Узнать больше</Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <FeatureCard 
              icon={<LightbulbIcon className="h-10 w-10 text-primary" />}
              title="Экономия времени"
              description="Нейросети помогут сократить время на подготовку учебных материалов в несколько раз"
            />
            <FeatureCard 
              icon={<BookOpen className="h-10 w-10 text-primary" />}
              title="Качественный контент"
              description="Получайте структурированные материалы с актуальной информацией по вашей теме"
            />
            <FeatureCard 
              icon={<GraduationCap className="h-10 w-10 text-primary" />}
              title="Для всех уровней"
              description="Подходит как для школьников, так и для студентов вузов и преподавателей"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ 
  icon, 
  title, 
  description 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string 
}) => {
  return (
    <div className="flex flex-col items-center p-6 bg-card rounded-lg shadow-sm border border-border/50 hover:border-primary/20 hover:shadow-md transition-all">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-medium mb-2">{title}</h3>
      <p className="text-muted-foreground text-center">{description}</p>
    </div>
  );
};

export default HeroSection;
