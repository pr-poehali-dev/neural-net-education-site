import { FileText, BookOpen, GraduationCap, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const ToolsSection = () => {
  return (
    <section className="py-20 px-4 md:px-6 lg:px-8 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Инструменты для учебы
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Наши нейросети помогут вам справиться с различными учебными задачами
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <ToolCard
            icon={<FileText className="h-8 w-8 text-primary" />}
            title="Презентации"
            description="Создавайте впечатляющие презентации с помощью ИИ. Структурированный контент, подбор иллюстраций и дизайн слайдов."
            link="/presentations"
          />
          <ToolCard
            icon={<BookOpen className="h-8 w-8 text-primary" />}
            title="Доклады"
            description="Помощь в написании докладов на любую тему с углубленным исследованием материала и правильным форматированием."
            link="/reports"
          />
          <ToolCard
            icon={<GraduationCap className="h-8 w-8 text-primary" />}
            title="Тесты"
            description="Генерация тестов и проверочных заданий с различными типами вопросов и автоматической проверкой ответов."
            link="/tests"
          />
        </div>
      </div>
    </section>
  );
};

const ToolCard = ({
  icon,
  title,
  description,
  link
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}) => {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
          {icon}
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow"></CardContent>
      <CardFooter>
        <Button asChild variant="outline" className="w-full group">
          <Link to={link} className="flex items-center justify-between">
            <span>Перейти к инструменту</span>
            <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ToolsSection;
