import Container from "../container";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import Wrapper from "../wrapper";
import { getTranslations } from "next-intl/server";

const ContactForm = async () => {
  const t = await getTranslations("contact");

  return (
    <div className="w-full pb-16 lg:pb-24">
      <Wrapper>
        <Container delay={0.1}>
          <div className="flex flex-col lg:items-center lg:justify-center">
            <h2 className="text-2xl lg:text-3xl font-semibold text-left lg:text-center">
              {t("formHeading")}
            </h2>
          </div>
        </Container>

        <Container delay={0.2}>
          <form className="max-w-3xl mx-auto w-full mt-10 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="firstName">{t("firstName")}</Label>
                <Input
                  id="firstName"
                  placeholder={t("firstNamePlaceholder")}
                  className="bg-[#0A0A0A] border-border/50"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">{t("lastName")}</Label>
                <Input
                  id="lastName"
                  placeholder={t("lastNamePlaceholder")}
                  className="bg-[#0A0A0A] border-border/50"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="subject">{t("subject")}</Label>
              <Input
                id="subject"
                placeholder={t("subjectPlaceholder")}
                className="bg-[#0A0A0A] border-border/50"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="workEmail">{t("email")}</Label>
              <Input
                id="workEmail"
                type="email"
                placeholder={t("emailPlaceholder")}
                className="bg-[#0A0A0A] border-border/50"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">{t("message")}</Label>
              <Textarea
                id="message"
                placeholder={t("messagePlaceholder")}
                className="min-h-[150px] bg-[#0A0A0A] border-border/50 resize-none"
              />
            </div>

            <Button className="w-full">{t("submit")}</Button>
          </form>
        </Container>
      </Wrapper>
    </div>
  );
};

export default ContactForm;
