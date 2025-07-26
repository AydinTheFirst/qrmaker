import { Download, QrCode } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";
import { useTranslation } from "react-i18next";

import { Button } from "~/components/ui/button";

interface QRData {
  value: string;
  type: string;
}

interface QRDisplayProps {
  qrData: QRData | null;
  onDownload: () => void;
}

export default function QRDisplay({ onDownload, qrData }: QRDisplayProps) {
  const { t } = useTranslation();
  if (!qrData) {
    return (
      <div className="border-muted-foreground/25 bg-muted/20 flex h-80 w-80 items-center justify-center rounded-xl border-2 border-dashed">
        <div className="text-muted-foreground text-center">
          <QrCode className="mx-auto mb-4 h-16 w-16 opacity-50" />
          <p className="mb-2 text-lg font-medium">{t("qrDisplay.title")}</p>
          <p className="text-sm">{t("qrDisplay.description")}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6 text-center">
      <div className="rounded-xl border bg-white p-8 shadow-lg">
        <QRCodeSVG
          className="mx-auto"
          id="qr-code-svg"
          level="M"
          size={280}
          value={qrData.value}
          includeMargin
        />
      </div>

      <div className="space-y-4">
        <Button
          className="hover:bg-accent h-12 w-full border-2"
          onClick={onDownload}
          size="lg"
          variant="outline"
        >
          <Download className="mr-2 h-5 w-5" />
          {t("qrDisplay.downloadButton")}
        </Button>

        <div className="bg-muted/50 rounded-lg p-4 text-left">
          <div className="mb-2 flex items-center gap-2">
            <div
              className={`h-3 w-3 rounded-full ${
                qrData.type === "url"
                  ? "bg-blue-500"
                  : qrData.type === "text"
                    ? "bg-green-500"
                    : qrData.type === "contact"
                      ? "bg-purple-500"
                      : "bg-orange-500"
              }`}
            ></div>
            <span className="text-sm font-medium">
              {t(
                `tabs.${qrData.type}` as
                  | "tabs.url"
                  | "tabs.text"
                  | "tabs.contact"
                  | "tabs.wifi"
              )}
              : {qrData.type.toUpperCase()}
            </span>
          </div>
          <p className="text-muted-foreground text-xs break-all">
            <strong>{t("qrDisplay.preview")}:</strong>{" "}
            {qrData.value.length > 60
              ? `${qrData.value.substring(0, 60)}...`
              : qrData.value}
          </p>
        </div>
      </div>
    </div>
  );
}
