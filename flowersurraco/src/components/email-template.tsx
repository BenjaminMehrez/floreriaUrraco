import * as React from 'react';

interface EmailTemplateProps {
  full_name: string;
  email: string;
  message: string;
}

export function EmailTemplate({ full_name, email, message }: EmailTemplateProps) {
  return (
    <html lang="es">
      <head>
        <meta charSet="UTF-8" />
        <title>Nuevo mensaje de contacto - Florería Aroma Natural</title>
      </head>
      <body
        style={{
          margin: 0,
          padding: 0,
          fontFamily: "'Segoe UI', sans-serif",
          backgroundColor: "#faf8f6",
        }}
      >
        <table
          width="100%"
          cellPadding={0}
          cellSpacing={0}
          border={0}
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
          <tr>
            <td
              style={{
                padding: "30px 20px 10px",
                textAlign: "center",
                backgroundColor: "#f3e9e5",
              }}
            >
              <img
                src="https://floreria-urraco.netlify.app/ramo.png"
                alt="Logo de Florería"
                style={{ maxWidth: "160px", marginBottom: "10px" }}
              />
            </td>
          </tr>

          {/* Contenido principal */}
          <tr>
            <td style={{ padding: "0 30px 30px" }}>
              <p
                style={{
                  fontSize: "16px",
                  color: "#444",
                  lineHeight: 1.6,
                  marginTop: "20px",
                }}
              >
                Has recibido un nuevo mensaje a través del formulario de contacto
                de la web de <strong>Florería Madison</strong>.
              </p>

              <table
                cellPadding={0}
                cellSpacing={0}
                border={0}
                width="100%"
                style={{ marginTop: "20px" }}
              >
                <tr>
                  <td style={{ padding: "8px 0" }}>
                    <strong style={{ color: "#333" }}>Nombre:</strong> {full_name}
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: "8px 0" }}>
                    <strong style={{ color: "#333" }}>
                      Correo electrónico:
                    </strong>{" "}
                    {email}
                  </td>
                </tr>
              </table>

              <p
                style={{
                  fontSize: "16px",
                  color: "#444",
                  marginTop: "30px",
                }}
              >
                <strong>Mensaje:</strong>
              </p>
              <blockquote
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
              </blockquote>

              <p
                style={{
                  fontSize: "14px",
                  color: "#999",
                  textAlign: "center",
                  marginTop: "40px",
                }}
              >
                Por favor, respondé al mensaje lo antes posible para mantener una
                excelente atención al cliente 🌸
              </p>
            </td>
          </tr>

          {/* Footer */}
          <tr>
            <td
              align="center"
              style={{
                backgroundColor: "#f3e9e5",
                padding: "12px",
                fontSize: "12px",
                color: "#5a3e36",
                borderRadius: "0 0 8px 8px",
              }}
            >
              © 2025 Florería Madison. Todos los derechos reservados.
            </td>
          </tr>
        </table>
      </body>
    </html>
  );
}