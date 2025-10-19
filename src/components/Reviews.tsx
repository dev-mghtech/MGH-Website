import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Reviews = () => {
  const reviews = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      content: "MGH Tech transformed our business with their innovative solutions. Their team's expertise and dedication exceeded all expectations.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "CTO, DataFlow Systems",
      content: "Outstanding service and support. They delivered a robust solution that scaled perfectly with our growing needs.",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "Director of IT, GlobalCorp",
      content: "Professional, reliable, and innovative. MGH Tech has been instrumental in our digital transformation journey.",
      rating: 5,
    },
  ];

  return (
    <section className="w-full py-20 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it - hear from the businesses we've helped transform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground mb-6 italic">"{review.content}"</p>
                <div>
                  <p className="font-semibold">{review.name}</p>
                  <p className="text-sm text-muted-foreground">{review.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
