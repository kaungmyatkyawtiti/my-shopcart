import AdminPotion from "./AdminPotion";
import MobileMenu from "./MobileMenu";
import MyContainer from "./MyContainer";
import MyLogo from "./MyLogo";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header
      className="py-5 border-b border-border top-0 z-50 sticky backdrop-blur-md bg-background/80"
    >
      <MyContainer
        className="flex items-center justify-between text-foreground/80"
      >
        {/* logo */}
        <div className="flex items-center gap-4">
          <MobileMenu />
          <MyLogo />
        </div>

        {/* nav  */}
        <Navbar />

        {/* admin */}
        <AdminPotion />
      </MyContainer>
    </header>
  )
}
