import { Github, Globe, Heart, Twitter } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="bg-background border-t">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Logo and Description */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <div className="relative">
                <img
                  src="/logo.png"
                  alt="QR Maker Logo"
                  className="h-8 w-8 rounded-lg"
                  onError={(e) => {
                    // Fallback to gradient if image fails to load
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                    const fallback = target.nextElementSibling as HTMLElement;
                    if (fallback) fallback.style.display = "flex";
                  }}
                />
                <div className="hidden h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-blue-500 to-purple-500">
                  <div className="h-4 w-4 rounded bg-white"></div>
                </div>
              </div>
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text font-bold text-transparent">
                QR Maker
              </span>
            </div>
            <p className="text-muted-foreground text-sm">
              {t("footer.description")}
            </p>
          </div>

          {/* Features */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold">{t("nav.features")}</h3>
            <ul className="text-muted-foreground space-y-2 text-sm">
              <li>
                {t("tabs.url")} QR {t("footer.codes")}
              </li>
              <li>
                {t("tabs.text")} QR {t("footer.codes")}
              </li>
              <li>
                {t("tabs.contact")} {t("footer.cards")}
              </li>
              <li>
                {t("tabs.wifi")} {t("footer.settings")}
              </li>
              <li>PNG {t("footer.download")}</li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold">{t("footer.resources")}</h3>
            <ul className="text-muted-foreground space-y-2 text-sm">
              <li>
                <a className="hover:text-foreground transition-colors" href="#">
                  {t("nav.documentation")}
                </a>
              </li>
              <li>
                <a className="hover:text-foreground transition-colors" href="#">
                  {t("footer.apiReference")}
                </a>
              </li>
              <li>
                <a className="hover:text-foreground transition-colors" href="#">
                  {t("footer.examples")}
                </a>
              </li>
              <li>
                <a className="hover:text-foreground transition-colors" href="#">
                  {t("footer.faq")}
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold">{t("footer.links")}</h3>
            <div className="flex space-x-3">
              <a
                className="border-border hover:bg-accent hover:text-accent-foreground flex h-8 w-8 items-center justify-center rounded-md border transition-colors"
                href="https://github.com/AydinTheFirst/qrmaker"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                className="border-border hover:bg-accent hover:text-accent-foreground flex h-8 w-8 items-center justify-center rounded-md border transition-colors"
                href="#"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                className="border-border hover:bg-accent hover:text-accent-foreground flex h-8 w-8 items-center justify-center rounded-md border transition-colors"
                href="#"
              >
                <Globe className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t pt-8">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <p className="text-muted-foreground text-sm">
              {t("footer.copyright")}
            </p>
            <p className="text-muted-foreground flex items-center text-sm">
              {t("footer.madeWith")}{" "}
              <Heart className="mx-1 h-4 w-4 text-red-500" />{" "}
              {t("footer.inTurkey")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
