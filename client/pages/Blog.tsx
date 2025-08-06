import { Navigation } from "@/components/ui/navigation";
import { PlaceholderPage } from "@/components/ui/placeholder-page";

export default function Blog() {
  return (
    <>
      <Navigation />
      <PlaceholderPage 
        title="Blog"
        description="Read insights, research findings, and thought leadership from our team of biomedical experts."
      />
    </>
  );
}
