import { Contact } from "lucide-react";
import { useTranslation } from "react-i18next";

import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";

interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  organization: string;
}

interface ContactFormProps {
  value: ContactFormData;
  onChange: (value: ContactFormData) => void;
}

export default function ContactForm({ onChange, value }: ContactFormProps) {
  const { t } = useTranslation();
  const updateField = (field: keyof ContactFormData, newValue: string) => {
    onChange({ ...value, [field]: newValue });
  };

  return (
    <div className="mt-6 space-y-4">
      <div className="mb-4 flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-purple-500 to-purple-600">
          <Contact className="h-4 w-4 text-white" />
        </div>
        <h3 className="text-lg font-semibold">{t("forms.contact.title")}</h3>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Label className="text-sm font-medium" htmlFor="name">
            {t("forms.contact.fullName")} *
          </Label>
          <Input
            className="h-11"
            id="name"
            onChange={(e) => updateField("name", e.target.value)}
            placeholder={t("forms.contact.namePlaceholder")}
            value={value.name}
          />
        </div>
        <div className="space-y-2">
          <Label className="text-sm font-medium" htmlFor="phone">
            {t("forms.contact.phoneNumber")}
          </Label>
          <Input
            className="h-11"
            id="phone"
            onChange={(e) => updateField("phone", e.target.value)}
            placeholder={t("forms.contact.phonePlaceholder")}
            value={value.phone}
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label className="text-sm font-medium" htmlFor="email">
          {t("forms.contact.emailAddress")}
        </Label>
        <Input
          className="h-11"
          id="email"
          onChange={(e) => updateField("email", e.target.value)}
          placeholder={t("forms.contact.emailPlaceholder")}
          type="email"
          value={value.email}
        />
      </div>

      <div className="space-y-2">
        <Label className="text-sm font-medium" htmlFor="organization">
          {t("forms.contact.organization")}
        </Label>
        <Input
          className="h-11"
          id="organization"
          onChange={(e) => updateField("organization", e.target.value)}
          placeholder={t("forms.contact.orgPlaceholder")}
          value={value.organization}
        />
      </div>

      <div className="rounded-lg border border-purple-200 bg-purple-50 p-4 dark:border-purple-800 dark:bg-purple-900/20">
        <h4 className="mb-2 text-sm font-medium text-purple-900 dark:text-purple-100">
          {t("forms.contact.tipsTitle")}
        </h4>
        <ul className="space-y-1 text-xs text-purple-700 dark:text-purple-300">
          {(t("forms.contact.tips", { returnObjects: true }) as string[]).map(
            (tip: string, index: number) => (
              <li key={index}>• {tip}</li>
            )
          )}
        </ul>
      </div>

      <p className="text-muted-foreground text-xs">
        {t("forms.contact.helpText")}
      </p>
    </div>
  );
}
