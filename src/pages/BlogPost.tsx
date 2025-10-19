import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowLeft, User } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";
import { blogPostsFr } from "@/data/blogPostsFr";
import { useLanguage } from "@/contexts/LanguageContext";
import NotFound from "./NotFound";

const BlogPost = () => {
  const { slug } = useParams();
  const { language, t } = useLanguage();
  const posts = language === "fr" ? blogPostsFr : blogPosts;
  const post = posts.find((p) => p.slug === slug);
  const prefix = language === "fr" ? "/fr" : "";

  if (!post) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-6 py-16">
        <Link to={`${prefix}/blog`}>
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            {t("blog.backToBlog")}
          </Button>
        </Link>

        <article className="max-w-4xl mx-auto">
          <Badge className="mb-4">{post.category}</Badge>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>
          
          <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-8">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{new Date(post.date).toLocaleDateString(language === "fr" ? "fr-FR" : "en-US", { month: 'long', day: 'numeric', year: 'numeric' })}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{post.readTime} {t("blog.readTime")}</span>
            </div>
          </div>

          <div className="aspect-video mb-8 rounded-lg overflow-hidden">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="mt-12 pt-8 border-t">
            <Link to={`${prefix}/blog`}>
              <Button>
                <ArrowLeft className="w-4 h-4 mr-2" />
                {t("blog.viewAll")}
              </Button>
            </Link>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;
