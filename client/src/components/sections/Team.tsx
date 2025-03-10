import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useLocation } from "wouter";

const team = [
  {
    name: "Sarah Johnson",
    role: "Lead Developer",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c"
  },
  {
    name: "Michael Chen",
    role: "UI/UX Designer",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c"
  },
  {
    name: "Emily Rodriguez",
    role: "Project Manager",
    image: "https://images.unsplash.com/photo-1559523182-a284c3fb7cff"
  }
];

export default function Team() {
  const [, setLocation] = useLocation();

  return (
    <section 
      id="team" 
      className="section-padding relative cursor-pointer"
      onClick={() => setLocation("/team")}
    >
      {/* Decorative background */}
      <div className="absolute inset-0 -z-10 bg-grid-white/5" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-muted/50 to-background" />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Team</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Meet our talented team of professionals dedicated to delivering excellence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              onClick={(e) => {
                e.stopPropagation();
                setLocation("/team");
              }}
            >
              <Card className="text-center card-hover bg-gradient-to-br from-card to-card/50 border-primary/10">
                <CardContent className="pt-8 pb-6">
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-transparent rounded-full transform -translate-y-2 scale-110 blur-lg" />
                    <Avatar className="w-24 h-24 mx-auto relative">
                      <AvatarImage src={member.image} alt={member.name} className="object-cover" />
                      <AvatarFallback>{member.name[0]}</AvatarFallback>
                    </Avatar>
                  </div>
                  <h3 className="font-semibold text-xl mb-2">{member.name}</h3>
                  <p className="text-muted-foreground">{member.role}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}