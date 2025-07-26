import { MessageSquare } from "lucide-react";
import { useTranslation } from "react-i18next";

import { Label } from "~/components/ui/label";

interface TextFormProps {
  value: string;
  onChange: (value: string) => void;
}

export default function TextForm({ onChange, value }: TextFormProps) {
  const { t } = useTranslation();
  return (
    <div className="mt-6 space-y-4">
      <div className="mb-4 flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-green-500 to-green-600">
          <MessageSquare className="h-4 w-4 text-white" />
        </div>
        <h3 className="text-lg font-semibold">{t("forms.text.title")}</h3>
      </div>

      <div className="space-y-2">
        <Label className="text-sm font-medium" htmlFor="text">
          {t("forms.text.textContent")}
        </Label>
        <textarea
          className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex min-h-[120px] w-full resize-none rounded-md border px-3 py-2 text-sm focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
          id="text"
          onChange={(e) => onChange(e.target.value)}
          placeholder={t("forms.text.placeholder")}
          value={value}
        />
        <div className="text-muted-foreground flex justify-between text-xs">
          <span>{t("forms.text.helpText")}</span>
          <span>
            {t("forms.text.charactersCount", { count: value.length })}
          </span>
        </div>
      </div>

      <div className="rounded-lg border border-green-200 bg-green-50 p-4 dark:border-green-800 dark:bg-green-900/20">
        <h4 className="mb-2 text-sm font-medium text-green-900 dark:text-green-100">
          {t("forms.text.tipsTitle")}
        </h4>
        <ul className="space-y-1 text-xs text-green-700 dark:text-green-300">
          {(t("forms.text.tips", { returnObjects: true }) as string[]).map(
            (tip: string, index: number) => (
              <li key={index}>• {tip}</li>
            )
          )}
        </ul>
      </div>
    </div>
  );
}
