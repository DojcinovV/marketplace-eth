import { Navbar, Footer } from "@components/common";

export default function BaseLayout({ children }) {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4">
        <div className="py-4">
          <Navbar />
        </div>
        <div className="fit">{children}</div>
      </div>
      <Footer />
    </>
  );
}
