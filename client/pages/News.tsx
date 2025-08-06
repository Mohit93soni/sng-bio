import { Navigation } from "@/components/ui/navigation";
import { PlaceholderPage } from "@/components/ui/placeholder-page";

export default function News() {
  return (
    <>
      <Navigation />
      <PlaceholderPage 
        title="News & Events"
        description="Stay updated with the latest breakthroughs, announcements, and events from SND Regenics."
      />
    </>
  );
}
