export const PRACTICE = {
  name: "Mein Ruhepol",
  fullName: "Heilpraktikerin für Psychotherapie in Westerkappeln.",
  slogan: "Entfalten Sie sich. Werden Sie, wer Sie wirklich sind.",
  doctorName: "Gabriele Freese",

  email: "freese@meinruhepol.de",
  phone: {
    value: "+491709881800",
    preview: "+49 170 9881800",
  },

  address: {
    street: "Gartenkamp 8",
    city: "Westerkappeln",
    zip: "49492",
  },

  hours: {
    weekdays: [
      "Montag – Donnerstag: 9:00 – 18:00 Uhr",
      "Freitag: 9:00 – 14:00 Uhr",
    ],
    note: "Termine nach Vereinbarung",
  },

  social: {
    instagram: "https://instagram.com/meinruhepol",
    facebook: "",
  },

  seo: {
    title: "Mein Ruhepol – Heilpraktikerin für Psychotherapie in Westerkappeln",
    description:
      "Hypnosetherapie, Entspannungsverfahren und Coaching in Westerkappeln. Ihr persönlicher Ruhepol – einfühlsam, professionell, individuell.",
    url: "https://www.meinruhepol.de",
    locale: "de_DE",
    keywords: [
      //
      "Heilpraktikerin für Psychotherapie Westerkappeln",
      "Heilpraktiker Psychotherapie Westerkappeln",
      "Psychotherapie Westerkappeln",
      "Therapeutin Westerkappeln",
      "Praxis Westerkappeln",

      //
      "Psychotherapie Tecklenburg",
      "Psychotherapie Ibbenbüren",
      "Psychotherapie Osnabrück Umgebung",
      "Heilpraktikerin Kreis Steinfurt",

      //
      "Hypnosetherapie Westerkappeln",
      "Hypnose Therapie Nordrhein-Westfalen",
      "Autogenes Training Westerkappeln",
      "Progressive Muskelentspannung",
      "Entspannungsverfahren Psychotherapie",
      "Coaching Westerkappeln",
      "psychologisches Coaching",
      //
      "Burnout Therapie Westerkappeln",
      "Angststörung Behandlung",
      "Stressbewältigung Therapie",
      "Schlafstörungen Therapie",
      "Depression Hilfe Westerkappeln",
      "innere Unruhe Therapie",
      "Panikattacken Behandlung",
      "Erschöpfung Burnout Hilfe",
      "Lebenskrisen Begleitung",
      //
      "Privatpraxis Psychotherapie",
      "Heilpraktiker Psychotherapie Erstgespräch",
      "psychotherapeutische Beratung",
      "Einzeltherapie Erwachsene",
      "Selbstzahler Psychotherapie",
    ],
    authors: [{ name: "Gabriele Freese" }],
    creator: "Gabriele Freese",
    publisher: "Gabriele Freese",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "Mein Ruhepol",
      image: "https://meinruhepol.de/images/search_google_preview.png",
      telephone: "+491709881800",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Gartenkamp 8",
        addressLocality: "Westerkappeln",
        addressCountry: "DE",
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Montag", "Dienstag", "Mittwoch", "Donnerstag"],
          opens: "09:00",
          closes: "18:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Freitag"],
          opens: "09:00",
          closes: "14:00",
        },
      ]
    },
  },

  domain: "meinruhepol.de",
} as const
