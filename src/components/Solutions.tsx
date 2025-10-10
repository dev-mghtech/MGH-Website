import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

const Solutions = () => {
  return (
    <section className="container mx-auto px-6 py-20">
      <div className="text-center mb-16 max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Comprehensive Training and Consulting Solutions Tailored to Your Needs
        </h2>
        <p className="text-lg text-muted-foreground">
          With a focus on individual attention, we are committed to delivering customized strategies, 
          empowering your workforce, and guiding your business to sustainable growth and excellence
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <div className="space-y-6">
          <h3 className="text-3xl font-bold">
            Our Approach to Technology Leadership
          </h3>
          
          <p className="text-muted-foreground">
            MGH Tech is a trusted provider of technology consulting solutions that unleash 
            the full potential of leaders and their teams.
          </p>
          
          <p className="text-muted-foreground">
            Our unique approach to technology leadership combines powerful insights based 
            on decades of industry experience, expert consultants and facilitators, and 
            innovative solutions that support and reinforce lasting organizational change.
          </p>
          
          <Button variant="outline" size="lg" className="group">
            See more
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>

        <div className="space-y-6">
          <h3 className="text-3xl font-bold">
            Technology leadership expands your organization's impact.
          </h3>
          
          <p className="text-muted-foreground">
            As leaders adopt and internalize principles of technological excellence, they:
          </p>
          
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-muted-foreground">
                Build their technical capabilities and strategic competence.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-muted-foreground">
                See their purpose and connect it with key business goals.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-muted-foreground">
                Develop organizational resilience and agility.
              </span>
            </li>
          </ul>
          
          <Button size="lg" className="w-full sm:w-auto">
            Show More Information
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
