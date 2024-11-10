import Footer from '../ui/footer';
import Header from '../ui/header';
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
        <Header />
        <div>{children}</div>
        <Footer/>
    </div>
  );
}