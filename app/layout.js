import Layout from "./layout/Layout";
import "../styles/styles.module.css";

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
  modal,
}) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
        {modal}
      </body>
    </html>
  );
}
