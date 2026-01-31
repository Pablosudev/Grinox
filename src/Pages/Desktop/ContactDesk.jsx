import styled from "styled-components";
import { useState } from "react";

export default function ContactDesk() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [website, setWebsite] = useState(""); // honeypot

  async function handleSubmit(e) {
    e.preventDefault();

    const payload = {
      name,
      company,
      email,
      phone,
      message,
      website,
    };

    const res = await fetch("/api/contact.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await res.json().catch(() => null);

    if (!res.ok || !data?.ok) {
      alert("Error al enviar el mensaje. Inténtalo de nuevo.");
      return;
    }

    alert("Mensaje enviado correctamente.");
    setName("");
    setCompany("");
    setEmail("");
    setPhone("");
    setMessage("");
    setWebsite("");
  }

  return (
    <ContainerContact>
      <ContentWrapper>
        <FormCard>
          <HeaderGroup>
            <Pill>Contacto</Pill>
            <Title>¿Hablamos?</Title>
            <Subtitle>
              Déjanos tus datos y nos pondremos en contacto contigo lo antes
              posible.
            </Subtitle>
          </HeaderGroup>

          <Form onSubmit={handleSubmit} autoComplete="off">
            {/* Honeypot */}
            <div style={{ position: "absolute", left: "-9999px" }} aria-hidden="true">
              <label htmlFor="website">Website</label>
              <input
                id="website"
                type="text"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            <Row>
              <Field>
                <Label>Nombre y apellidos</Label>
                <Input
                  type="text"
                  placeholder="Ej. Carlos García López"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Field>

              <Field>
                <Label>Empresa</Label>
                <Input
                  type="text"
                  placeholder="Nombre de tu empresa"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                />
              </Field>
            </Row>

            <Row>
              <Field>
                <Label>Teléfono</Label>
                <Input
                  type="tel"
                  placeholder="+34 600 000 000"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </Field>

              <Field>
                <Label>Email</Label>
                <Input
                  type="email"
                  placeholder="tucorreo@empresa.com"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Field>
            </Row>

            <Field>
              <Label>Mensaje</Label>
              <TextArea
                rows={4}
                placeholder="Cuéntanos brevemente qué necesitas…"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </Field>

            <FooterRow>
              <InfoText>
                Cuidamos tus datos. Solo los usaremos para responder a tu
                consulta.
              </InfoText>
              <SubmitButton type="submit">
                Enviar mensaje
              </SubmitButton>
            </FooterRow>
          </Form>
        </FormCard>
      </ContentWrapper>
    </ContainerContact>
  );
}

const ContainerContact = styled.div`
  width: 100%;
  min-height: 100vh;
  background-image: url("/img/Backgrounds/fondoGear.png");
  background-repeat: repeat;
  background-size: auto;
  background-position: center;
  background-attachment: fixed;
  position: relative;
  z-index: 0;
  padding-bottom: 5%;
  @media screen and (max-width: 723px) {
    display: none;
  }
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const FormCard = styled.div`
  width: 100%;
  max-width: 900px;
  padding: 3rem clamp(2rem, 4vw, 3.5rem);
  margin-top: 8%;
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  background: radial-gradient(
    circle at top left,
    rgba(15, 52, 92, 0.98),
    rgba(5, 26, 54, 0.98)
  );
  backdrop-filter: blur(14px);
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.45);
`;

const HeaderGroup = styled.div`
  margin-bottom: 2.2rem;
`;

const Pill = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.3rem 0.9rem;
  border-radius: 999px;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: #c6ffdd;
  background: linear-gradient(
    135deg,
    rgba(99, 179, 46, 0.25),
    rgba(0, 166, 214, 0.25)
  );
  border: 1px solid rgba(255, 255, 255, 0.15);
`;

const Title = styled.h2`
  margin-top: 1rem;
  margin-bottom: 0.4rem;
  font-size: clamp(2rem, 3vw, 2.4rem);
  font-weight: 700;
  color: #f5f8ff;
`;

const Subtitle = styled.p`
  font-size: 0.95rem;
  color: rgba(226, 235, 255, 0.75);
  max-width: 520px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Row = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Field = styled.div`
  flex: 1;
  min-width: min(260px, 100%);
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  margin-bottom: 0.4rem;
  color: rgba(211, 223, 255, 0.9);
`;

const Input = styled.input`
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.16);
  background: rgba(8, 20, 45, 0.9);
  padding: 0.75rem 1rem;
  font-size: 0.95rem;
  color: #f5f8ff;
  outline: none;
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease,
    background 0.2s ease;

  &::placeholder {
    color: rgba(196, 208, 235, 0.55);
  }

  &:focus {
    border-color: rgba(99, 179, 46, 0.85);
    box-shadow: 0 0 0 1px rgba(0, 166, 214, 0.7);
    background: rgba(10, 25, 55, 0.95);
  }
`;

const TextArea = styled.textarea`
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.16);
  background: rgba(8, 20, 45, 0.9);
  padding: 0.9rem 1rem;
  font-size: 0.95rem;
  color: #f5f8ff;
  outline: none;
  resize: vertical;
  min-height: 160px;
  transition:
    border-color 0.2s ease,
    box-shadow 0.2s ease,
    background 0.2s ease;

  &::placeholder {
    color: rgba(196, 208, 235, 0.55);
  }

  &:focus {
    border-color: rgba(0, 166, 214, 0.9);
    box-shadow: 0 0 0 1px rgba(99, 179, 46, 0.7);
    background: rgba(10, 25, 55, 0.95);
  }
`;

const FooterRow = styled.div`
  margin-top: 0.5rem;
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: flex-end;
  flex-wrap: wrap;
`;

const InfoText = styled.p`
  font-size: 0.75rem;
  color: rgba(196, 208, 235, 0.7);
  max-width: 260px;
`;

const SubmitButton = styled.button`
  border: none;
  border-radius: 999px;
  padding: 0.9rem 2.4rem;
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  cursor: pointer;
  color: #051019;
  background: linear-gradient(135deg, #63b32e, #00a6d6);
  box-shadow: 0 16px 40px rgba(0, 166, 214, 0.45);
  transform-origin: center;
  transition:
    transform 0.16s ease,
    box-shadow 0.16s ease,
    filter 0.16s ease;

  &:hover {
    transform: translateY(-1px) scale(1.01);
    box-shadow: 0 22px 46px rgba(0, 166, 214, 0.55);
    filter: brightness(1.03);
  }

  &:active {
    transform: translateY(1px) scale(0.99);
    box-shadow: 0 10px 26px rgba(0, 0, 0, 0.65);
  }
`;
