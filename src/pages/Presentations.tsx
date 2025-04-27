import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, Download, Settings, Play, Sparkles, CheckCircle2, LucideIcon } from "lucide-react";

const Presentations = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-12 md:py-20 px-4 bg-primary/5">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                Создание презентаций с помощью ИИ
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Быстрое создание качественных презентаций для учебы, проектов и выступлений с помощью нейросетей
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 px-4">
          <div className="container mx-auto">
            <Tabs defaultValue="create" className="max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="create" className="text-lg py-3">Создать презентацию</TabsTrigger>
                <TabsTrigger value="improve" className="text-lg py-3">Улучшить существующую</TabsTrigger>
              </TabsList>
              
              {/* Create Presentation Tab */}
              <TabsContent value="create">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Создание новой презентации</CardTitle>
                    <CardDescription>
                      Заполните информацию о презентации, и нейросеть сгенерирует ее за вас
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-2">
                      <label htmlFor="topic" className="text-sm font-medium">Тема презентации</label>
                      <Input id="topic" placeholder="Например: Искусственный интеллект в образовании" />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="slides" className="text-sm font-medium">Количество слайдов</label>
                        <Select defaultValue="10">
                          <SelectTrigger id="slides">
                            <SelectValue placeholder="Выберите количество" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="5">5 слайдов</SelectItem>
                            <SelectItem value="10">10 слайдов</SelectItem>
                            <SelectItem value="15">15 слайдов</SelectItem>
                            <SelectItem value="20">20 слайдов</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="style" className="text-sm font-medium">Стиль презентации</label>
                        <Select defaultValue="academic">
                          <SelectTrigger id="style">
                            <SelectValue placeholder="Выберите стиль" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="academic">Академический</SelectItem>
                            <SelectItem value="business">Деловой</SelectItem>
                            <SelectItem value="creative">Творческий</SelectItem>
                            <SelectItem value="minimal">Минималистичный</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="additional" className="text-sm font-medium">Дополнительные требования (необязательно)</label>
                      <Textarea id="additional" placeholder="Укажите особые требования или пожелания к презентации" />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button size="lg" className="w-full">
                      <Sparkles className="mr-2 h-4 w-4" />
                      Создать презентацию
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
              
              {/* Improve Presentation Tab */}
              <TabsContent value="improve">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">Улучшение существующей презентации</CardTitle>
                    <CardDescription>
                      Загрузите презентацию и получите улучшенную версию с помощью нейросети
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="border-2 border-dashed rounded-lg p-6 text-center">
                      <FileText className="h-10 w-10 text-muted-foreground mx-auto mb-4" />
                      <p className="mb-2 font-medium">Перетащите файл презентации</p>
                      <p className="text-sm text-muted-foreground mb-4">или</p>
                      <Button variant="outline">Выбрать файл</Button>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Что улучшить?</label>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                        <ImprovementOption label="Содержание" icon={FileText} />
                        <ImprovementOption label="Визуал" icon={Settings} />
                        <ImprovementOption label="Структуру" icon={Play} />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="comments" className="text-sm font-medium">Ваши комментарии (необязательно)</label>
                      <Textarea id="comments" placeholder="Укажите, что именно вы хотите улучшить в презентации" />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button size="lg" className="w-full">
                      <Sparkles className="mr-2 h-4 w-4" />
                      Улучшить презентацию
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
            <h2 className="text-3xl font-bold text-center mb-12">Преимущества создания презентаций с ИИ</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <FeatureCard
                title="Экономия времени"
                description="Создание презентации занимает минуты вместо часов ручной работы"
                icon={<CheckCircle2 className="h-10 w-10 text-primary" />}
              />
              <FeatureCard
                title="Качественный контент"
                description="Структурированная информация и профессиональное оформление"
                icon={<CheckCircle2 className="h-10 w-10 text-primary" />}
              />
              <FeatureCard
                title="Простая настройка"
                description="Легко изменяйте стиль, объем и содержание презентации"
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
              <FileText className="h-5 w-5 text-primary" />
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

// Helper component for improvement options
const ImprovementOption = ({ 
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

export default Presentations;
