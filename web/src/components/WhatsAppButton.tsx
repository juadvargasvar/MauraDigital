import { hasWhatsapp, whatsappHref } from "@/lib/site";

type Props = {
  children?: React.ReactNode;
  variant?: "primary" | "secondary";
  message?: string;
};

const styles = {
  primary: "bg-green-600 text-white hover:bg-green-700",
  secondary: "border border-cyan-400/60 text-cyan-300 hover:bg-cyan-400/10",
};

export default function WhatsAppButton({
  children = "Escríbenos por WhatsApp",
  variant = "primary",
  message,
}: Props) {
  const external = hasWhatsapp;
  return (
    <a
      href={whatsappHref(message)}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`inline-block rounded-lg px-6 py-3 font-medium ${styles[variant]}`}
    >
      {children}
    </a>
  );
}
