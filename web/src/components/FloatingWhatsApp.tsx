import { hasWhatsapp, whatsappHref } from "@/lib/site";

export default function FloatingWhatsApp() {
  return (
    <a
      href={whatsappHref()}
      {...(hasWhatsapp ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className="fixed bottom-4 right-4 z-50 rounded-full bg-green-600 px-5 py-3 text-sm font-medium text-white shadow-lg hover:bg-green-700"
    >
      WhatsApp
    </a>
  );
}
