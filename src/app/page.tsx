import Differentials from "@/components/Differentials";
import Feedbacks from "@/components/Feedbacks";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Plans from "@/components/Plans";
import Top from "@/components/Top";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Top />
        <Differentials />
        <Feedbacks />
        <Plans />
      </main>

      <Footer />
    </>
  )
}
