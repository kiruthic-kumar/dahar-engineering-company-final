import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import { useEffect } from "react";
import { setSEO } from "@/lib/seo";

export default function NotFound() {
  useEffect(() => {
    setSEO(
      "Dahar Engineering Company — Page Not Found",
      "Page not found. Explore Dahar Engineering Company’s products and services in Coimbatore — precision manufacturing of threaded rods, lead screws and jack screws. Visit Products or Contact."
    );
  }, []);

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50">
      <Card className="w-full max-w-md mx-4">
        <CardContent className="pt-6">
          <div className="flex mb-4 gap-2">
            <AlertCircle className="h-8 w-8 text-red-500" />
            <h1 className="text-2xl font-bold text-gray-900">404 Page Not Found</h1>
          </div>

          <p className="mt-4 text-sm text-gray-600">
            Did you forget to add the page to the router?
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
