export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      {children}
      &copy; Next.js 짱이야!
    </html>
  );
}
