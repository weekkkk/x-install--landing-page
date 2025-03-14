export const androidServices = (
  t: (key: string) => string
): UiPriceCardProps[] => [
  {
    service: t("pricePage.service") + "Play Market",
    serviceAccent: t("pricePage.serviceAccent"),
    serviceDescription: t("pricePage.serviceDescription"),
    guarantees: [
      t("pricePage.numberInstalls"),
      t("pricePage.fastPromotion"),
      t("pricePage.lowPrice"),
      t("pricePage.personalConsulting"),
    ],
    price: "0.15",
    isUnitPrice: true,
    md: {
      service: t("pricePage.service") + "Play Market",
      serviceAccent: t("pricePage.serviceAccent"),
      serviceDescription: t("pricePage.serviceDescriptionMobile"),
    },
  },
  {
    service: t("pricePage.service2") + "Android",
    serviceAccent: t("pricePage.serviceAccentForAndroid"),
    serviceDescription: t("pricePage.serviceDescription2"),
    guarantees: [
      t("pricePage.trafficSourcesAndroid"),
      t("pricePage.personalConsulting"),
      t("pricePage.resultsQuickly"),
    ],
    price: "2000",
    isUnitPrice: false,
    md: {
      service: t("pricePage.service2") + "Android",
      serviceAccent: t("pricePage.serviceAccent2"),
      serviceDescription: t("pricePage.serviceDescriptionMobile2"),
    },
  },
  {
    service: t("pricePage.service3"),
    serviceAccent: `InApp`,
    serviceDescription: t("pricePage.serviceDescription3"),
    guarantees: [
      t("pricePage.uniqueStrategy"),
      t("pricePage.hiddenFees"),
      t("pricePage.advertisingCampaigns"),
    ],
    price: "5000",
    isUnitPrice: false,
    md: {
      service: t("pricePage.service3"),
      serviceAccent: `InApp`,
      serviceDescription: t("pricePage.serviceDescriptionMobile3"),
    },
  },
  {
    service: t("pricePage.service4"),
    serviceAccent: `Google (UAC)`,
    serviceDescription: t("pricePage.serviceDescription4"),
    guarantees: [
      t("pricePage.templateDevelopment"),
      t("pricePage.creatives"),
      t("pricePage.advertisingCampaigns"),
    ],
    price: "10,000",
    isUnitPrice: false,
    md: {
      service: t("pricePage.service4"),
      serviceAccent: `Google (UAC)`,
      serviceDescription: t("pricePage.serviceDescription4"),
    },
  },
];
