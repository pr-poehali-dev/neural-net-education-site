import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GraduationCap, ListChecks, CheckSquare, MessageSquare, Sparkles, CheckCircle2, LucideIcon } from "lucide-react";

const Tests = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-12 md:py-20 px-4 bg-primary/5">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                Создание тестов с помощью ИИ
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Быстрая генерация качественных тестов и контрольных заданий для проверки знаний
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 px-4">
          <div className="container mx-auto">
            <Tabs defaultValue="create" className="max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="create" className="text-lg py-3">Создать тест</TabsTrigger>
                <TabsTrigger value="analyze" className="text-lg py-3">Анализ результатов</TabsTrigger>
              </TabsList>
              
              {/* Create Test Tab */}
              <TabsContent value="create">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Создание нового теста</CardTitle>
                    <CardDescription>
                      Заполните информацию о тесте, и нейросеть сгенерирует его для вас
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">Предмет/тема теста</label>
                      <Input id="subject" placeholder="Например: Органическая химия / Углеводороды" />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="questions" className="text-sm font-medium">Количество вопросов</label>
                        <Select defaultValue="10">
                          <SelectTrigger id="questions">
                            <SelectValue placeholder="Выберите количество" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="5">5 вопросов</SelectItem>
                            <SelectItem value="10">10 вопросов</SelectItem>
                            <SelectItem value="15">15 вопросов</SelectItem>
                            <SelectItem value="20">20 вопросов</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="difficulty" className="text-sm font-medium">Сложность</label>
                        <Select defaultValue="medium">
                          <SelectTrigger id="difficulty">
                            <SelectValue placeholder="Выберите сложность" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="easy">Легкая</SelectItem>
                            <SelectItem value="medium">Средняя</SelectItem>
                            <SelectItem value="hard">Сложная</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Типы вопросов</label>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                        <QuestionType label="Выбор ответа" icon={ListChecks} />
                        <QuestionType label="Да/Нет" icon={CheckSquare} />
                        <QuestionType label="Открытый вопрос" icon={MessageSquare} />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="material" className="text-sm font-medium">Материалы для генерации (необязательно)</label>
                      <Textarea id="material" placeholder="Вставьте текст, на основе которого нужно сгенерировать тест" />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button size="lg" className="w-full">
                      <Sparkles className="mr-2 h-4 w-4" />
                      Создать тест
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
              
              {/* Analyze Results Tab */}
              <TabsContent value="analyze">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Анализ результатов тестирования</CardTitle>
                    <CardDescription>
                      Загрузите результаты теста для анализа и получения рекомендаций
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="border-2 border-dashed rounded-lg p-6 text-center">
                      <GraduationCap className="h-10 w-10 text-muted-foreground mx-auto mb-4" />
                      <p className="mb-2 font-medium">Перетащите файл с результатами</p>
                      <p className="text-sm text-muted-foreground mb-4">или</p>
                      <Button variant="outline">Выбрать файл</Button>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="group" className="text-sm font-medium">Группа/класс (необязательно)</label>
                      <Input id="group" placeholder="Например: 10А класс" />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="analysis" className="text-sm font-medium">Детали анализа (необязательно)</label>
                      <Textarea id="analysis" placeholder="Укажите, какие аспекты особенно интересуют в результатах тестирования" />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button size="lg" className="w-full">
                      <Sparkles className="mr-2 h-4 w-4" />
                      Провести анализ
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 bg-secondary/50 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Преимущества создания тестов с ИИ</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <FeatureCard
                title="Разнообразие вопросов"
                description="Создание различных типов вопросов для комплексной проверки знаний"
                icon={<CheckCircle2 className="h-10 w-10 text-primary" />}
              />
              <FeatureCard
                title="Автоматическая оценка"
                description="Мгновенная проверка и анализ результатов тестирования"
                icon={<CheckCircle2 className="h-10 w-10 text-primary" />}
              />
              <FeatureCard
                title="Персонализация"
                description="Тесты адаптируются под учебные материалы и уровень подготовки"
                icon={<CheckCircle2 className="h-10 w-10 text-primary" />}
              />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 px-4 border-t">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <GraduationCap className="h-5 w-5 text-primary" />
              <span className="font-medium">НейроУчеба © 2025</span>
            </div>
            <div className="flex gap-6 text-muted-foreground">
              <a href="/about" className="hover:text-foreground transition-colors">О проекте</a>
              <a href="/contact" className="hover:text-foreground transition-colors">Контакты</a>
              <a href="/faq" className="hover:text-foreground transition-colors">Вопросы и ответы</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Helper component for feature cards
const FeatureCard = ({ 
  title, 
  description, 
  icon 
}: { 
  title: string; 
  description: string; 
  icon: React.ReactNode 
}) => {
  return (
    <div className="bg-card p-6 rounded-lg border shadow-sm">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-medium mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

// Helper component for question types
const QuestionType = ({ 
  label, 
  icon: Icon 
}: { 
  label: string; 
  icon: LucideIcon 
}) => {
  return (
    <div className="border rounded-md p-3 flex items-center gap-2 hover:bg-accent cursor-pointer">
      <Icon className="h-4 w-4 text-primary" />
      <span className="text-sm">{label}</span>
    </div>
  );
};

export default Tests;
