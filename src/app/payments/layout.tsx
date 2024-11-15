import PaymentHeader from "@/components/payments/PaymentHeader";
import CitationNavbar from "@/components/review-dashboard-mobile/ReviewNavbar";

export default async function PaymentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      
      {/* <PaymentHeader /> */}
      {/* <CitationNavbar heading="Payments" isHeaderVisible={false} /> */}
      {children}
    </div>
  );
}
