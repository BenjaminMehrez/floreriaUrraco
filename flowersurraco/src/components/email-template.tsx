import * as React from "react";
import { Html, Head, Body, Container, Section, Img, Text } from "@react-email/components";

interface EmailTemplateProps {
  full_name: string;
  email: string;
  message: string;
}

export function EmailTemplate({ full_name, email, message }: EmailTemplateProps) {
  return (
    <Html lang="es">
      <Head>
        <title>Nuevo mensaje de contacto - Florería Aroma Natural</title>
        <meta charSet="UTF-8" />
      </Head>
      <Body
        style={{
          margin: 0,
          padding: 0,
          fontFamily: "'Segoe UI', sans-serif",
          backgroundColor: "#faf8f6",
        }}
      >
        <Container
          style={{
            maxWidth: "600px",
            margin: "auto",
            backgroundColor: "#ffffff",
            borderRadius: "8px",
            overflow: "hidden",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          }}
        >
          {/* Header con logo */}
          <Section
            style={{
              padding: "30px 20px 10px",
              textAlign: "center",
              backgroundColor: "#f3e9e5",
            }}
          >
            <Img
              src="https://floreria-urraco.netlify.app/favicon.ico"
              alt="Logo de Florería"
              width="160"
              style={{ marginBottom: "10px" }}
            />
          </Section>

          {/* Contenido principal */}
          <Section style={{ padding: "0 30px 30px" }}>
            <Text
              style={{
                fontSize: "16px",
                color: "#444",
                lineHeight: 1.6,
                marginTop: "20px",
              }}
            >
              Has recibido un nuevo mensaje a través del formulario de contacto de
              la web de <strong>Florería Madison</strong>.
            </Text>

            <Section style={{ marginTop: "20px" }}>
              <Text style={{ padding: "8px 0", color: "#333" }}>
                <strong>Nombre:</strong> {full_name}
              </Text>
              <Text style={{ padding: "8px 0", color: "#333" }}>
                <strong>Correo electrónico:</strong> {email}
              </Text>
            </Section>

            <Text
              style={{
                fontSize: "16px",
                color: "#444",
                marginTop: "30px",
              }}
            >
              <strong>Mensaje:</strong>
            </Text>

            <Section
              style={{
                backgroundColor: "#fff7f3",
                padding: "20px",
                borderLeft: "4px solid #c46d5e",
                margin: "20px 0",
                fontSize: "16px",
                color: "#333",
              }}
            >
              “{message}”
            </Section>

            <Text
              style={{
                fontSize: "14px",
                color: "#999",
                textAlign: "center",
                marginTop: "40px",
              }}
            >
              Por favor, respondé al mensaje lo antes posible para mantener una
              excelente atención al cliente 🌸
            </Text>
          </Section>

          {/* Footer */}
          <Section
            style={{
              backgroundColor: "#f3e9e5",
              padding: "12px",
              fontSize: "12px",
              color: "#5a3e36",
              textAlign: "center",
              borderRadius: "0 0 8px 8px",
            }}
          >
            © 2025 Florería Madison. Todos los derechos reservados.
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
