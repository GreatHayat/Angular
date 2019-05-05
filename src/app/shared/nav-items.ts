import { NavItem } from "@app/_models";

export const NavItems:NavItem[]=[
  {
    "displayName": "Create new job",
    "iconName": "add",
    "route": "",
    "children": []
  },
  {
    "displayName": "Dashboard",
    "iconName": "dashboard",
    "route": "",
    "children": []
  },
  {
    "displayName": "Workshop",
    "iconName": "build",
    "children": [
      {
        "displayName": "Job List",
        "iconName": "person",
        "children": []
      },
      {
        "displayName": "Finished Jobs",
        "iconName": "check",
        "children": []
      }
    ]
  },
  {
    "displayName": "Master Data",
    "iconName": "class",
    "children": [
      {
        "displayName": "Clients",
        "iconName": "group",
        "route": "clients",
        "children": []
      },
      {
        "displayName": "Suppliers",
        "iconName": "airport_shuttle",
        "children": []
      },
      {
        "displayName": "Cars",
        "iconName": "time_to_leave",
        "route": "vehicles",
        "children": []
      },
      {
        "displayName": "Articles",
        "iconName": "chrome_reader_mode",
        "children": []
      }
    ]
  },
  {
    "displayName": "Invoices",
    "iconName": "add_shopping_cart",
    "children": [
      {
        "displayName": "Invoice List",
        "iconName": "list",
        "children": []
      },
      {
        "displayName": "Recurring Invoices",
        "iconName": "line_weight",
        "children": []
      },
      {
        "displayName": "Reminders",
        "iconName": "notifications_active",
        "children": []
      }
    ]
  },
  {
    "displayName": "Timetracking",
    "iconName": "alarm",
    "children": [
      {
        "displayName": "..",
        "iconName": "",
        "children": []
      },
      {
        "displayName": "..",
        "iconName": "",
        "children": []
      }
    ]
  },
  {
    "displayName": "Reports",
    "iconName": "book",
    "children": [
      {
        "displayName": "..",
        "iconName": "",
        "children": []
      },
      {
        "displayName": "..",
        "iconName": "",
        "children": []
      }
    ]
  }
]
