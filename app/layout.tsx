import { title } from "process";
import Navigation from "../components/navigation";
export const metadata = {
  title: {
    template: "%s | NEXT MOVIES",
    default: "LOADING>>>",
  },
  description: "about metadata",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <body>{children}</body>
      </body>
    </html>
  );
}
