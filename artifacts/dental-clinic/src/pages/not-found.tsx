import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CLINIC_NAME, CLINIC_PHONE_RAW, CLINIC_PHONE } from "@/config";
import SEOHead from "@/components/SEOHead";

export default function NotFound() {
  return (
    <>
    <SEOHead
      title={`Page Not Found | ${CLINIC_NAME}`}
      description="The page you are looking for could not be found. Return to the homepage or call us to book a dental appointment."
      canonicalUrl="https://yourdomain.com/404"
    />
    <div className="min-h-screen w-full flex items-center justify-center bg-muted/30 pt-20">
      <div className="text-center px-4 max-w-md mx-auto">
        <div className="text-8xl font-extrabold text-primary mb-4">404</div>
        <h1 className="text-2xl font-bold text-foreground mb-3">Page Not Found</h1>
        <p className="text-muted-foreground mb-8">
          Sorry, we couldn't find the page you were looking for. It may have been moved or doesn't exist.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <Button className="rounded-full px-8">Go to Homepage</Button>
          </Link>
          <a href={`tel:${CLINIC_PHONE_RAW}`}>
            <Button variant="outline" className="rounded-full px-8 gap-2">
              <Phone className="w-4 h-4" />
              {CLINIC_PHONE}
            </Button>
          </a>
        </div>
        <p className="text-sm text-muted-foreground mt-8">
          Need help? Contact {CLINIC_NAME} and we'll be happy to assist you.
        </p>
      </div>
    </div>
    </>
  );
}
