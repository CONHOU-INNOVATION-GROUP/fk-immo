import { siteInfo } from "@/lib/site";
import { formatPrice } from "@/lib/utils";
import { ContactFormType } from "@/types/site";
import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
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
  const { firstName, lastName, email, message, phone, property } = data;

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
              </Text>
              <Text className="text-black text-[14px] leading-[24px]">
                <strong>Nom:</strong> {lastName}
              </Text>
              <Text className="text-black text-[14px] leading-[24px]">
                <strong>Email:</strong>{" "}
                <Link className="no-underline" href={`mailto:${email}`}>
                  {email}
                </Link>
              </Text>
              <Text className="text-black text-[14px] leading-[24px]">
                <strong>Téléphone:</strong>{" "}
                <Link className="no-underline" href={`tel:${phone}`}>
                  {phone}
                </Link>
              </Text>

              {message && (
                <Text className="text-black text-[14px] leading-[24px]">
                  <strong>Message:</strong> {message}
                </Text>
              )}
            </Section>
            {property && (
              <Section>
                <Text className="text-xl font-semibold text-gray-800 mb-2">
                  Détails de la propriété
                </Text>

                <Img
                  src={property.metadata.image}
                  alt={property.metadata.title}
                  width={150}
                  height={200}
                  className="rounded-md mx-auto my-4"
                />

                <Text className="text-black text-[14px] leading-[24px]">
                  <strong>Titre:</strong> {property.metadata.title}
                </Text>
                <Text className="text-black text-[14px] leading-[24px]">
                  <strong>Description:</strong> {property.metadata.description}
                </Text>
                <Text className="text-black text-[14px] leading-[24px]">
                  <strong>Prix:</strong>{" "}
                  {property.metadata.price
                    ? formatPrice(property.metadata.price)
                    : "Prix à la demande"}
                </Text>
                <Text className="text-black text-[14px] leading-[24px]">
                  <strong>Lien:</strong>{" "}
                  <Link
                    className="no-underline"
                    href={`https://${siteInfo.url}/${property.slug}`}
                  >
                    Voir la propriété
                  </Link>
                </Text>
              </Section>
            )}
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default ContactEmail;
