import HeroHeader from "@/components/hero-header";
import Faq from "@/components/faq";
import CTA from "@/components/cta";
import { setRequestLocale } from "next-intl/server";

type Props = {
  params: Promise<{ locale: string }>;
};

const FaqPage = async ({ params }: Props) => {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="w-full relative flex flex-col pt-16">
      <HeroHeader
        title="Frequently Asked Questions"
        description="Find answers to common questions about SGTools. Can't find what you're looking for? Feel free to contact our team."
      />
      <Faq />
      <CTA />
    </div>
  );
};

export default FaqPage;
