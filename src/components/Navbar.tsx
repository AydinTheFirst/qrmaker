import { Github, QrCode } from "lucide-react";
import { useTranslation } from "react-i18next";

import { LanguageSelector } from "~/components/language-selector";
import { Button } from "~/components/ui/button";

export default function Navbar() {
  const { t } = useTranslation();
  return (
    <nav className="bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex">
          <a className="mr-6 flex items-center space-x-2" href="/">
            <div className="relative">
              <QrCode className="text-primary h-6 w-6" />
              <div className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
            </div>
            <span className="hidden bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text font-bold text-transparent sm:inline-block">
              QR Maker
            </span>
          </a>
        </div>

        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <div className="text-muted-foreground hidden items-center space-x-4 text-sm md:flex">
              <span>
                {t("tabs.url")} • {t("tabs.text")} • {t("tabs.contact")} •{" "}
                {t("tabs.wifi")}
              </span>
            </div>
          </div>

          <nav className="flex items-center space-x-2">
            <LanguageSelector />

            <div className="bg-border h-4 w-px" />

            <Button size="sm" variant="ghost" asChild>
              <a
                className="flex items-center space-x-2"
                href="https://github.com/AydinTheFirst/qrmaker"
                rel="noopener noreferrer"
                target="_blank"
              >
                <Github className="h-4 w-4" />
                <span className="hidden sm:inline">{t("nav.github")}</span>
              </a>
            </Button>
          </nav>
        </div>
      </div>
    </nav>
  );
}
