export const CALIFORNIA_COUNTIES = [
    "Alameda", "Butte", "Calaveras", "Colusa", "Contra Costa", "El Dorado",
    "Fresno", "Glenn", "Imperial", "Inyo", "Kern", "Kings", "Lake",
    "Los Angeles", "Madera", "Marin", "Mariposa", "Mendocino", "Merced",
    "Mono", "Monterey", "Napa", "Nevada", "Orange", "Placer", "Riverside",
    "Sacramento", "San Benito", "San Bernardino", "San Diego", "San Francisco",
    "San Luis Obispo", "San Mateo", "Santa Barbara", "Santa Clara", "Santa Cruz",
    "Siskiyou", "Solano", "Sonoma", "Stanislaus", "Sutter", "Tehama", "Tulare",
    "Ventura", "Yolo", "Yuba"
];

export const CASE_CATEGORIES = [
    { value: "Appellate", label: "Appellate", hideZip: false },
    { value: "Civil Restraining Order", label: "Civil Restraining Order", hideZip: true },
    { value: "Civil Limited", label: "Civil Limited", hideZip: false },
    { value: "Civil Unlimited", label: "Civil Unlimited", hideZip: false },
    { value: "Family", label: "Family", hideZip: true },
    { value: "Family – DCSS", label: "Family – DCSS", hideZip: true },
    { value: "Juvenile Dependency", label: "Juvenile Dependency", hideZip: true },
    { value: "Probate", label: "Probate", hideZip: true },
    { value: "Probate Mental Health", label: "Probate Mental Health", hideZip: true },
    { value: "Small Claims", label: "Small Claims", hideZip: false }
];

export const CASE_TYPES = {
    "Appellate": [
        "Appeal - Civil",
        "Appeal - Criminal",
        "Appeal - Family Law",
        "Appeal - Juvenile",
        "Writ Petition"
    ],
    "Civil Restraining Order": [
        "Civil Harassment",
        "Workplace Violence",
        "Private Postsecondary School Violence",
        "Elder or Dependent Adult Abuse"
    ],
    "Civil Limited": [
        "Asbestos",
        "Auto - Personal Injury/Property Damage/Wrongful Death",
        "Breach of Contract/Warranty",
        "Business Tort/Unfair Business Practice",
        "Civil Rights",
        "Collections",
        "Complaint",
        "Declaratory Relief",
        "Fraud",
        "Insurance Coverage",
        "Intellectual Property",
        "Intentional Tort",
        "Medical Malpractice",
        "Other Employment",
        "Other Personal Injury/Property Damage/Wrongful Death",
        "Other PI/PD/WD",
        "Professional Negligence - Other",
        "Product Liability",
        "Toxic Tort/Environmental",
        "UDRP - Unlawful Detainer - Residential",
        "UDCRE - Unlawful Detainer - Commercial/Retail/Eviction",
        "Wrongful Eviction"
    ],
    "Civil Unlimited": [
        "Asbestos",
        "Auto - Personal Injury/Property Damage/Wrongful Death",
        "Breach of Contract/Warranty",
        "Business Tort/Unfair Business Practice",
        "Civil Rights",
        "Collections",
        "Complaint",
        "Declaratory Relief",
        "Fraud",
        "Insurance Coverage",
        "Intellectual Property",
        "Intentional Tort",
        "Medical Malpractice",
        "Other Employment",
        "Other Personal Injury/Property Damage/Wrongful Death",
        "Other PI/PD/WD",
        "Professional Negligence - Other",
        "Product Liability",
        "Toxic Tort/Environmental",
        "UDRP - Unlawful Detainer - Residential",
        "UDCRE - Unlawful Detainer - Commercial/Retail/Eviction",
        "Wrongful Eviction"
    ],
    "Family": [
        "Dissolution (Divorce)",
        "Legal Separation",
        "Nullity",
        "Paternity",
        "Custody and Support",
        "Domestic Violence Prevention",
        "Adoption",
        "Guardianship",
        "Name Change",
        "Other Family Law"
    ],
    "Family – DCSS": [
        "Child Support Establishment",
        "Child Support Modification",
        "Child Support Enforcement",
        "Spousal Support",
        "Medical Support"
    ],
    "Juvenile Dependency": [
        "Dependency Petition",
        "Termination of Parental Rights",
        "Adoption",
        "Guardianship"
    ],
    "Probate": [
        "Decedent Estate",
        "Guardianship",
        "Conservatorship",
        "Trust",
        "Other Probate"
    ],
    "Probate Mental Health": [
        "Conservatorship - LPS",
        "Mental Health Treatment",
        "Other Mental Health"
    ],
    "Small Claims": [
        "Breach of Contract",
        "Fraud",
        "Personal Injury/Property Damage",
        "Property Damage",
        "Return of Security Deposit",
        "Other Small Claims"
    ]
};

export const PARTY_ROLES = [
    { value: "Petitioner", label: "Petitioner" },
    { value: "Respondent", label: "Respondent" },
    { value: "Plaintiff", label: "Plaintiff" },
    { value: "Defendant", label: "Defendant" },
    { value: "Cross-Complainant", label: "Cross-Complainant" },
    { value: "Cross-Defendant", label: "Cross-Defendant" },
    { value: "Appellant", label: "Appellant" },
    { value: "Respondent/Appellant", label: "Respondent/Appellant" },
    { value: "Claimant", label: "Claimant" },
    { value: "Guardian Ad Litem", label: "Guardian Ad Litem" },
    { value: "Trustee", label: "Trustee" },
    { value: "Executor", label: "Executor" },
    { value: "Administrator", label: "Administrator" },
    { value: "Conservator", label: "Conservator" },
    { value: "Guardian", label: "Guardian" },
    { value: "Minor", label: "Minor" },
    { value: "Incompetent Person", label: "Incompetent Person" },
    { value: "Intervenor", label: "Intervenor" },
    { value: "Real Party in Interest", label: "Real Party in Interest" },
    { value: "Third Party", label: "Third Party" },
    { value: "Amicus Curiae", label: "Amicus Curiae" },
    { value: "Other", label: "Other" }
];

export const ALTERNATE_NAME_TYPES = [
    { value: "AKA", label: "AKA (Also Known As)" },
    { value: "Alias", label: "Alias" },
    { value: "DBA", label: "DBA (Doing Business As)" },
    { value: "ESA", label: "ESA" },
    { value: "FDBA", label: "FDBA (Fictitious Doing Business As)" },
    { value: "FKA", label: "FKA (Formerly Known As)" }
];

export const ORGANIZATION_TYPES = [
    { value: "Other Commercial Entity", label: "Other Commercial Entity" },
    { value: "Government Entity", label: "Government Entity" },
    { value: "Trust", label: "Trust" }
];

export const SUFFIX_OPTIONS = [
    "Jr.", "Sr.", "II", "III", "IV", "V", "Esq."
];

export const US_STATES = [
    { value: "AL", label: "Alabama" },
    { value: "AK", label: "Alaska" },
    { value: "AZ", label: "Arizona" },
    { value: "AR", label: "Arkansas" },
    { value: "CA", label: "California" },
    { value: "CO", label: "Colorado" },
    { value: "CT", label: "Connecticut" },
    { value: "DE", label: "Delaware" },
    { value: "FL", label: "Florida" },
    { value: "GA", label: "Georgia" },
    { value: "HI", label: "Hawaii" },
    { value: "ID", label: "Idaho" },
    { value: "IL", label: "Illinois" },
    { value: "IN", label: "Indiana" },
    { value: "IA", label: "Iowa" },
    { value: "KS", label: "Kansas" },
    { value: "KY", label: "Kentucky" },
    { value: "LA", label: "Louisiana" },
    { value: "ME", label: "Maine" },
    { value: "MD", label: "Maryland" },
    { value: "MA", label: "Massachusetts" },
    { value: "MI", label: "Michigan" },
    { value: "MN", label: "Minnesota" },
    { value: "MS", label: "Mississippi" },
    { value: "MO", label: "Missouri" },
    { value: "MT", label: "Montana" },
    { value: "NE", label: "Nebraska" },
    { value: "NV", label: "Nevada" },
    { value: "NH", label: "New Hampshire" },
    { value: "NJ", label: "New Jersey" },
    { value: "NM", label: "New Mexico" },
    { value: "NY", label: "New York" },
    { value: "NC", label: "North Carolina" },
    { value: "ND", label: "North Dakota" },
    { value: "OH", label: "Ohio" },
    { value: "OK", label: "Oklahoma" },
    { value: "OR", label: "Oregon" },
    { value: "PA", label: "Pennsylvania" },
    { value: "RI", label: "Rhode Island" },
    { value: "SC", label: "South Carolina" },
    { value: "SD", label: "South Dakota" },
    { value: "TN", label: "Tennessee" },
    { value: "TX", label: "Texas" },
    { value: "UT", label: "Utah" },
    { value: "VT", label: "Vermont" },
    { value: "VA", label: "Virginia" },
    { value: "WA", label: "Washington" },
    { value: "WV", label: "West Virginia" },
    { value: "WI", label: "Wisconsin" },
    { value: "WY", label: "Wyoming" }
];

export const ALL_ACCOUNTS = [
    {
        "id": "82cb9438-5e18-4fbe-a5b1-13be5b08a014",
        "name": "Jacob Darbin",
        "account_number": "1001",
        "account_type": null,
        "status": "Active"
    },
    {
        "id": "35d5d355-4937-4a04-9d0a-b3dd43b8d988",
        "name": "Jacob Darbinyan",
        "account_number": "1002",
        "account_type": null,
        "status": "Active"
    },
    {
        "id": "49b7451a-cfcf-4d97-82b1-759f8bbd7a43",
        "name": "Richa Singha",
        "account_number": "1003",
        "account_type": null,
        "status": "Active"
    }
]
// Helper function to check if case type is Unlawful Detainer
export function isUnlawfulDetainer(caseType) {
    return caseType.includes("UDRP") || caseType.includes("UDCRE") || caseType.includes("Unlawful Detainer");
}