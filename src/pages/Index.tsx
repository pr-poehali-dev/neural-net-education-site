import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ToolsSection from "@/components/ToolsSection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Brain, ChevronRight, Lightbulb, Sparkles } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <HeroSection />
        <ToolsSection />
        
        {/* Examples Section */}
        <section className="py-20 px-4 md:px-6 lg:px-8 bg-secondary/50">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Как это работает
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Простые шаги для начала работы с нейросетями в учебе
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <StepCard
                number={1}
                title="Выберите инструмент"
                description="Определите, какой тип учебного материала вам нужен: презентация, доклад или тест"
              />
              <StepCard
                number={2}
                title="Укажите тему"
                description="Введите тему, по которой нужно создать материал, и настройте параметры"
              />
              <StepCard
                number={3}
                title="Получите результат"
                description="Нейросеть сгенерирует готовый материал, который можно использовать или редактировать"
              />
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 px-4 md:px-6 lg:px-8 bg-primary/5">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto bg-card border rounded-xl p-8 md:p-12 text-center shadow-sm">
              <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-6">
                <Lightbulb className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                Готовы попробовать?
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Начните использовать нейросети для учебы прямо сейчас и оцените, насколько это удобно
              </p>
              <Button asChild size="lg" className="rounded-full">
                <Link to="/presentations" className="flex items-center">
                  Создать первый материал
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="py-8 px-4 border-t">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Brain className="h-5 w-5 text-primary" />
              <span className="font-medium">НейроУчеба © 2025</span>
            </div>
            <div className="flex gap-6 text-muted-foreground">
              <Link to="/about" className="hover:text-foreground transition-colors">О проекте</Link>
              <Link to="/contact" className="hover:text-foreground transition-colors">Контакты</Link>
              <Link to="/faq" className="hover:text-foreground transition-colors">Вопросы и ответы</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

const StepCard = ({
  number,
  title,
  description
}: {
  number: number;
  title: string;
  description: string;
}) => {
  return (
    <div className="relative p-6 bg-card rounded-lg shadow-sm border border-border/50">
      <div className="absolute -top-4 -left-4 bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">
        {number}
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-medium mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

export default Index;
