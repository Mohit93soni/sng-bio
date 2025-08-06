import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Construction } from "lucide-react";

interface PlaceholderPageProps {
  title: string;
  description: string;
}

export function PlaceholderPage({ title, description }: PlaceholderPageProps) {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <Card className="text-center">
          <CardHeader className="pb-8">
            <div className="mx-auto w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-4">
              <Construction className="h-8 w-8 text-muted-foreground" />
            </div>
            <CardTitle className="text-3xl font-bold">{title}</CardTitle>
            <p className="text-muted-foreground text-lg mt-2">{description}</p>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-8">
              This page is currently under development. Our team is working hard to bring you detailed content about our cutting-edge biomedical solutions.
            </p>
            <Button variant="outline" onClick={() => window.history.back()}>
              Go Back
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
