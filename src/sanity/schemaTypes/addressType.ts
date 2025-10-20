import { defineField, defineType } from "sanity";
import { HomeIcon } from '@sanity/icons'

export const addressType = defineType({
  name: "address",
  title: "Address",
  type: "document",
  icon: HomeIcon,
  fields: [
    defineField({
      name: "name",
      title: "Address Name",
      type: "string",
      description: "A friendly name for address (e.g. Home, Work)",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "email",
      title: "User Email",
      type: "email",
    }),
    defineField({
      name: "address",
      title: "Street Address",
      type: "string",
      description: "The street address including apartment/unit number",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "state",
      title: "State",
      type: "string",
      description: "3-Letter state code (e.g. AYA, YGN)",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "zip",
      title: "ZIP Code",
      type: "string",
      description: "1234 or 12345-6789",
      validation: (rule) => rule.required()
        .regex(/^\d{5}(-\d{4})?$/, {
          name: "zipCode",
          invert: false,
        })
        .custom((zip: string | undefined) => {
          if (!zip) {
            return "ZIP code is required";
          }
          if (!zip.match(/^\d{5}(-\d{4})?$/)) {
            return "Please enter a valid ZIP code (e.g. 12345 or 12345-6789)";
          }
          return true;
        }),
    }),
    defineField({
      name: "default",
      title: "Default Address",
      type: "boolean",
      description: "Is this default shipping address?",
      initialValue: false,
    }),
    defineField({
      name: "createdAt",
      title: "Created At",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "address",
      city: "city",
      state: "state",
      isDefault: "default",
    },
    prepare({ title, subtitle, city, state, isDefault }) {
      return {
        title: `${title} ${isDefault ? "(Default)" : ""}`,
        subtitle: `${subtitle}, ${city}, ${state}`,
      };
    },
  },
})
