import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Dumbbell, User } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const navItems = [
  { path: "/workouts", label: "Workouts", icon: Dumbbell },
  { path: "/profile", label: "Profile", icon: User },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex h-16 items-center justify-between p-4 ">
      <Link
        to="/workouts"
        className="font-bold text-xl flex items-center gap-2"
      >
        <Dumbbell className="h-6 w-6" />
        <span className="text-pink-500">Mica</span> Lifts
      </Link>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon">
            <Menu className="h-8 w-8" />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <nav className="flex flex-col gap-2 mt-10 px-3">
            {navItems.map(({ path, label, icon: Icon }) => (
              <Link
                key={path}
                to={path}
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 text-lg p-2 rounded-md hover:bg-pink-500 hover:text-slate-900 transition-all duration-300"
              >
                <Icon className="h-5 w-5" />
                {label}
              </Link>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </nav>
  );
};
