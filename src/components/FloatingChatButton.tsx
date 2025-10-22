import { MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import InteractiveQuestionnaire from "@/components/InteractiveQuestionnaire";
import { useChat } from "@/contexts/ChatContext";

const FloatingChatButton = () => {
  const { isOpen, toggleChat } = useChat();

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Popover open={isOpen} onOpenChange={toggleChat}>
        <PopoverTrigger asChild>
          <Button
            size="lg"
            className="h-14 w-14 rounded-full shadow-xl hover:scale-110 transition-transform"
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <MessageCircle className="h-6 w-6" />
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent
          side="top"
          align="end"
          className="w-[400px] p-0 mr-4 mb-4"
        >
          <InteractiveQuestionnaire />
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default FloatingChatButton;
