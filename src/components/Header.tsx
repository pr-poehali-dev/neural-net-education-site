import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  NavigationMenu, 
  NavigationMenuContent, 
  NavigationMenuItem, 
  NavigationMenuLink, 
  NavigationMenuList, 
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import { Brain, GraduationCap, BookOpen, FileText, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-background/95 sticky top-0 z-50 w-full border-b backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-bold text-primary text-xl">
          <Brain className="h-6 w-6" />
          <span>НейроУчеба</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/" className={cn(navigationMenuTriggerStyle(), "font-medium")}>
                  Главная
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="font-medium">Инструменты</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <MenuLink
                      to="/presentations"
                      title="Презентации"
                      description="Создание и улучшение презентаций с помощью ИИ"
                      icon={<FileText className="h-5 w-5" />}
                    />
                    <MenuLink
                      to="/reports"
                      title="Доклады"
                      description="Помощь в подготовке докладов любой сложности"
                      icon={<BookOpen className="h-5 w-5" />}
                    />
                    <MenuLink
                      to="/tests"
                      title="Тесты"
                      description="Создание тестов и опросников для проверки знаний"
                      icon={<GraduationCap className="h-5 w-5" />}
                    />
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/about" className={cn(navigationMenuTriggerStyle(), "font-medium")}>
                  О проекте
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t">
          <div className="flex flex-col space-y-4 py-4 px-6">
            <Link 
              to="/" 
              className="text-foreground font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Главная
            </Link>
            <div>
              <p className="font-medium mb-2">Инструменты:</p>
              <div className="pl-4 flex flex-col space-y-2">
                <Link to="/presentations" className="text-muted-foreground flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                  <FileText className="h-4 w-4" /> Презентации
                </Link>
                <Link to="/reports" className="text-muted-foreground flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                  <BookOpen className="h-4 w-4" /> Доклады
                </Link>
                <Link to="/tests" className="text-muted-foreground flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                  <GraduationCap className="h-4 w-4" /> Тесты
                </Link>
              </div>
            </div>
            <Link 
              to="/about" 
              className="text-foreground font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              О проекте
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

// Helper component for navigation menu links
const MenuLink = ({ 
  to, 
  title, 
  description, 
  icon 
}: { 
  to: string; 
  title: string; 
  description: string; 
  icon: React.ReactNode 
}) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          to={to}
          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
        >
          <div className="flex items-center gap-2 text-sm font-medium leading-none">
            {icon}
            <div>{title}</div>
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {description}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
};

export default Header;
