import { Link } from "lucide-react";
import { useTranslation } from "react-i18next";

import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";

interface UrlFormProps {
  value: string;
  onChange: (value: string) => void;
}

export default function UrlForm({ onChange, value }: UrlFormProps) {
  const { t } = useTranslation();
  return (
    <div className="mt-6 space-y-4">
      <div className="mb-4 flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-blue-500 to-blue-600">
          <Link className="h-4 w-4 text-white" />
        </div>
        <h3 className="text-lg font-semibold">{t("forms.url.title")}</h3>
      </div>

      <div className="space-y-2">
        <Label className="text-sm font-medium" htmlFor="url">
          {t("forms.url.websiteUrl")}
        </Label>
        <Input
          className="h-11"
          id="url"
          onChange={(e) => onChange(e.target.value)}
          placeholder={t("forms.url.placeholder")}
          value={value}
        />
        <p className="text-muted-foreground text-xs">
          {t("forms.url.helpText")}
        </p>
      </div>

      <div className="rounded-lg border border-blue-200 bg-blue-50 p-4 dark:border-blue-800 dark:bg-blue-900/20">
        <h4 className="mb-2 text-sm font-medium text-blue-900 dark:text-blue-100">
          {t("forms.url.tipsTitle")}
        </h4>
        <ul className="space-y-1 text-xs text-blue-700 dark:text-blue-300">
          {(t("forms.url.tips", { returnObjects: true }) as string[]).map(
            (tip: string, index: number) => (
              <li key={index}>• {tip}</li>
            )
          )}
        </ul>
      </div>
    </div>
  );
}
