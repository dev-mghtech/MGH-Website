import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";
import { useLanguage } from "@/translations/LanguageContext";

const Reviews = () => {
  const { t } = useLanguage();
  
  const reviews = [
    {
      name: t("reviews.review1.name"),
      role: t("reviews.review1.role"),
      content: t("reviews.review1.content"),
      rating: 5,
      initials: "SL",
    },
    {
      name: t("reviews.review2.name"),
      role: t("reviews.review2.role"),
      content: t("reviews.review2.content"),
      rating: 5,
      initials: "MC",
    },
    {
      name: t("reviews.review3.name"),
      role: t("reviews.review3.role"),
      content: t("reviews.review3.content"),
      rating: 5,
      initials: "ER",
    },
  ];

  return (
    <section className="w-full py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{t("reviews.title")}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t("reviews.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {reviews.map((review, index) => (
            <Card key={index} className="bg-white shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6 space-y-4">
                {/* Star Rating */}
                <div className="flex gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                {/* Testimonial Text */}
                <p className="text-foreground leading-relaxed text-sm">
                  {review.content}
                </p>
                
                {/* Author Info */}
                <div className="flex items-center gap-3 pt-2">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src="" alt={review.name} />
                    <AvatarFallback className="bg-primary/10 text-foreground text-sm font-medium">
                      {review.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-sm">{review.name}</p>
                    <p className="text-xs text-muted-foreground">{review.role}</p>
                  </div>
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
