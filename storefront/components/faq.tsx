import Container from "@/components/container";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Wrapper from "@/components/wrapper";
import { getTranslations } from "next-intl/server";

const Faq = async () => {
  const t = await getTranslations("faq");
  const items = t.raw("items") as Array<{ question: string; answer: string }>;

  return (
    <div className="flex flex-col items-center justify-center relative w-full overflow-hidden">
      <Wrapper>
        <Container>
          <div className="flex flex-col">
            <Accordion type="single" collapsible className="w-full">
              {items.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-base font-base font-semibold">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </Container>
      </Wrapper>
    </div>
  );
};

export default Faq;
