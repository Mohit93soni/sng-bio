import { Navigation } from "@/components/ui/navigation";
import { PlaceholderPage } from "@/components/ui/placeholder-page";

export default function About() {
  return (
    <>
      <Navigation />
      <PlaceholderPage 
        title="About Us"
        description="Learn about our mission to revolutionize drug testing, organogenesis, and regenerative medicine through cutting-edge hybrid technology."
      />
    </>
  );
}
