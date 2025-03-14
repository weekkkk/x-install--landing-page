export const iosServices = (t: (key: string) => string): UiPriceCardProps[] => [
  {
    service: t("pricePage.service") + "AppStore",
    serviceAccent: t("pricePage.serviceAccent"),
    serviceDescription: t("pricePage.serviceDescription"),
    guarantees: [
      t("pricePage.numberInstalls"),
      t("pricePage.fastPromotion"),
      t("pricePage.lowPrice"),
      t("pricePage.personalConsulting"),
    ],
    price: "0.24",
    isUnitPrice: true,
    md: {
      service: t("pricePage.service") + "AppStore",
      serviceAccent: t("pricePage.serviceAccent"),
      serviceDescription: t("pricePage.serviceDescriptionMobile"),
    },
  },
  {
    service: t("pricePage.service2") + "IOS",
    serviceAccent: t("pricePage.serviceAccent2"),
    serviceDescription: t("pricePage.serviceDescription2"),
    guarantees: [t("pricePage.individualApproach")],
    price: "2999",
    isUnitPrice: false,
    md: {
      service: t("pricePage.service2") + "IOS",
      serviceAccent: t("pricePage.serviceAccent2"),
      serviceDescription: t("pricePage.serviceDescriptionMobile2"),
      guarantees: [
        t("pricePage.trafficSources"),
        t("pricePage.individualApproach"),
        t("pricePage.resultsQuickly"),
      ],
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
  {
    service: t("pricePage.service5"),
    serviceAccent: t("pricePage.serviceAccent5"),
    serviceDescription: t("pricePage.serviceDescription5"),
    guarantees: [
      t("pricePage.paymentResults"),
      t("pricePage.fastPromotion"),
      t("pricePage.promotionSystem"),
    ],
    md: {
      service: t("pricePage.serviceAccent5"),
      serviceAccent: t("pricePage.guaranteed"),
      serviceDescription: t("pricePage.serviceDescriptionMobile5"),
    },
  },
  {
    service: t("pricePage.service6"),
    serviceAccent: t("pricePage.serviceAccent6"),
    serviceDescription: t("pricePage.serviceDescription6"),
    guarantees: [
      t("pricePage.individualApproach"),
      t("pricePage.invest"),
      t("pricePage.weInterested"),
    ],
    md: {
      service: t("pricePage.service6"),
      serviceAccent: t("pricePage.serviceAccent6"),
      serviceDescription: t("pricePage.serviceDescriptionMobile6"),
    },
  },
];
