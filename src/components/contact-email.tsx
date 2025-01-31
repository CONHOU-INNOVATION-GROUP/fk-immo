import { ContactFormType } from "@/types/site";
import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

interface Props {
  data: ContactFormType;
}

const ContactEmail = ({ data }: Props) => {
  const { firstName, lastName, email, message } = data;

  return (
    <Html>
      <Head />
      <Preview>
        Nouveau message de {firstName} {lastName}
      </Preview>
      <Tailwind>
        <Body>
          <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] max-w-[465px]">
            <Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
              Message
            </Heading>
            <Text className="text-gray-600 text-md mb-6">
              Vous avez reçu un nouveau message. Voici les détails:
            </Text>

            <Text className="text-xl font-semibold text-gray-800 mb-2">
              Détails du client
            </Text>
            <Section className="flex flex-col gap-2">
              <Text className="text-black text-[14px] leading-[24px]">
                <strong>Prénom:</strong> {firstName}
                <strong>Nom:</strong> {lastName}
              </Text>
              <Text className="text-black text-[14px] leading-[24px]">
                <strong>Email:</strong>{" "}
                <Link className="no-underline" href={`mailto:${email}`}>
                  {email}
                </Link>
              </Text>

              {message && (
                <Text className="text-black text-[14px] leading-[24px]">
                  <strong>Message:</strong> {message}
                </Text>
              )}
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default ContactEmail;
