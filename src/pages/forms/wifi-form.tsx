import { Wifi } from "lucide-react";
import React from "react";
import { useTranslation } from "react-i18next";

import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";

interface WifiFormData {
  ssid: string;
  password: string;
  security: string;
  hidden: boolean;
}

interface WifiFormProps {
  value: WifiFormData;
  onChange: (value: WifiFormData) => void;
}

export default function WifiForm({ onChange, value }: WifiFormProps) {
  const { t } = useTranslation();
  
  const updateField = (
    field: keyof WifiFormData,
    newValue: string | boolean
  ) => {
    onChange({ ...value, [field]: newValue });
  };

  return (
    <div className="mt-6 space-y-4">
      <div className="mb-4 flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-orange-500 to-orange-600">
          <Wifi className="h-4 w-4 text-white" />
        </div>
        <h3 className="text-lg font-semibold">{t('forms.wifi.title')}</h3>
      </div>

      <div className="space-y-2">
        <Label className="text-sm font-medium" htmlFor="ssid">
          {t('forms.wifi.networkName')}
        </Label>
        <Input
          className="h-11"
          id="ssid"
          onChange={(e) => updateField("ssid", e.target.value)}
          placeholder={t('forms.wifi.networkPlaceholder')}
          value={value.ssid}
        />
      </div>

      <div className="space-y-2">
        <Label className="text-sm font-medium" htmlFor="password">
          {t('forms.wifi.password')}
        </Label>
        <Input
          className="h-11"
          id="password"
          onChange={(e) => updateField("password", e.target.value)}
          placeholder={t('forms.wifi.passwordPlaceholder')}
          type="password"
          value={value.password}
        />
      </div>

      <div className="space-y-2">
        <Label className="text-sm font-medium" htmlFor="security">
          {t('forms.wifi.securityType')}
        </Label>
        <select
          className="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-11 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
          id="security"
          onChange={(e) => updateField("security", e.target.value)}
          value={value.security}
        >
          <option value="WPA">{t('forms.wifi.securityOptions.wpa')}</option>
          <option value="WEP">{t('forms.wifi.securityOptions.wep')}</option>
          <option value="nopass">{t('forms.wifi.securityOptions.none')}</option>
        </select>
      </div>

      <div className="flex items-center space-x-2">
        <input
          checked={value.hidden}
          className="h-4 w-4 rounded border-gray-300 text-orange-600 focus:ring-orange-500"
          id="hidden"
          onChange={(e) => updateField("hidden", e.target.checked)}
          type="checkbox"
        />
        <Label className="text-sm font-medium" htmlFor="hidden">
          {t('forms.wifi.hiddenNetwork')}
        </Label>
      </div>

      <div className="rounded-lg border border-orange-200 bg-orange-50 p-4 dark:border-orange-800 dark:bg-orange-900/20">
        <h4 className="mb-2 text-sm font-medium text-orange-900 dark:text-orange-100">
          {t('forms.wifi.tipsTitle')}
        </h4>
        <ul className="space-y-1 text-xs text-orange-700 dark:text-orange-300">
          {(t('forms.wifi.tips', { returnObjects: true }) as string[]).map((tip: string, index: number) => (
            <li key={index}>• {tip}</li>
          ))}
        </ul>
      </div>

      <p className="text-muted-foreground text-xs">
        {t('forms.wifi.helpText')}
      </p>
    </div>
  );
}
