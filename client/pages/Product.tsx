import { Navigation } from "@/components/ui/navigation";
import { PlaceholderPage } from "@/components/ui/placeholder-page";

export default function Product() {
  return (
    <>
      <Navigation />
      <PlaceholderPage 
        title="Our Products"
        description="Discover our innovative hybrid fabrication technology and biomaterials for neural tissue engineering that are revolutionizing the biomedical field."
      />
    </>
  );
}
