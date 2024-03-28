import * as RemixIcons from "react-icons/ri"

export const ItemsInternal = [
    {
        Icon: RemixIcons.RiDashboardLine,
        Display: "Tableau de bord",
        Link: "/onlyprivateroute/dashboard"
    },
    {
        Icon: RemixIcons.RiOrganizationChart,
        Display: "Evènements",
        Link: "/onlyprivateroute/events",
    },
    {
        Icon: RemixIcons.RiTicket2Line,
        Display: "Billets",
        Link: "/onlyprivateroute/tickets",
    },
    {
        Icon: RemixIcons.RiMoneyEuroBoxLine,
        Display: "Ventes",
        Link: "/onlyprivateroute/Sales",
    },
    {
        Icon: RemixIcons.RiAccountPinBoxLine,
        Display: "Comptes",
        Link: "/onlyprivateroute/accounts",
    },
    {
        Icon: RemixIcons.RiUserHeartLine,
        Display: "Clients",
        Link: "/onlyprivateroute/customers",
    },
    {
        Icon: RemixIcons.RiUserSettingsLine,
        Display: "Utilisateurs",
        Link: "/onlyprivateroute/users",
    },
    {
        Icon: RemixIcons.RiSettings2Line,
        Display: "Paramètres",
        Link: "/onlyprivateroute/settings",
    }
]

export const ItemsExternal = [
    {
        Icon: RemixIcons.RiDashboardLine,
        Display: "Tableau de bord",
        Link: "/dashboard"
    },
    {
        Icon: RemixIcons.RiOrganizationChart,
        Display: "Organisations",
        Link: "/organizations",
    },
    {
        Icon: RemixIcons.RiBuildingLine,
        Display: "Entreprises",
        Link: "/companies",
    },
    {
        Icon: RemixIcons.RiSurveyLine,
        Display: "Enquêtes",
        Link: "/survey",
        subNav: [
            {
                Icon: RemixIcons.RiListRadio,
                Display: "Liste des enquêtes",
                Link: "/survey/list",
            }
        ]
    },
    {
        Icon: RemixIcons.RiUserHeartLine,
        Display: "Clients",
        Link: "/customer",
    },
    {
        Icon: RemixIcons.RiSoundModuleLine,
        Display: "Paramètres",
        Link: "/settings",
    }
]
