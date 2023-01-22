import Hero from "./Hero";
import Classes from "./Classes";
import Description from "./Description";
import Form from "./Form";
import Benefits from "./Benefits";
import Products from "./Products";
import ScrollToTopButton from "../../components/ScrollToTopButton";


const Index = () => {
  return (
    <main>
     <ScrollToTopButton />
     <Hero />
     <Benefits />
     <Products />
     <Description />
     <Classes />
     <Form />
    </main>
  );
};

export default Index;
