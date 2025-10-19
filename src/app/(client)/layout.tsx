import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import { ClerkProvider } from "@clerk/nextjs";

interface AppLayoutProps {
  children: React.ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <ClerkProvider>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </div>
    </ClerkProvider>
  )
}
