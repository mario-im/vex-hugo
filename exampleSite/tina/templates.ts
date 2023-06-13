import type { TinaField } from "tinacms";
export function autoriFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "title",
    },
    {
      type: "string",
      name: "name",
      label: "name",
    },
    {
      type: "image",
      name: "photo",
      label: "photo",
    },
    {
      type: "image",
      name: "avatar",
      label: "avatar",
    },
    {
      type: "string",
      name: "instagram",
      label: "instagram",
    },
  ] as TinaField[];
}
export function chisiamoFields() {
  return [
    {
      type: "object",
      name: "banner_chisiamo",
      label: "banner_chisiamo",
      fields: [
        {
          type: "boolean",
          name: "enable",
          label: "enable",
        },
        {
          type: "string",
          name: "title",
          label: "title",
        },
        {
          type: "image",
          name: "image",
          label: "image",
        },
        {
          type: "string",
          name: "content",
          label: "content",
          ui: {
            component: "textarea",
          },
        },
      ],
    },
    {
      type: "object",
      name: "promo_chisiamo",
      label: "promo_chisiamo",
      fields: [
        {
          type: "boolean",
          name: "enable",
          label: "enable",
        },
        {
          type: "image",
          name: "image",
          label: "image",
        },
        {
          type: "string",
          name: "title",
          label: "title",
        },
        {
          type: "string",
          name: "content",
          label: "content",
          ui: {
            component: "textarea",
          },
        },
      ],
    },
    {
      type: "object",
      name: "about_product_chisiamo",
      label: "about_product_chisiamo",
      fields: [
        {
          type: "boolean",
          name: "enable",
          label: "enable",
        },
        {
          type: "string",
          name: "title",
          label: "title",
        },
        {
          type: "object",
          name: "items",
          label: "items",
          list: true,
          fields: [
            {
              type: "image",
              name: "image",
              label: "image",
            },
            {
              type: "string",
              name: "title",
              label: "title",
            },
            {
              type: "string",
              name: "content",
              label: "content",
              ui: {
                component: "textarea",
              },
            },
            {
              type: "object",
              name: "button",
              label: "button",
              fields: [
                {
                  type: "boolean",
                  name: "enable",
                  label: "enable",
                },
                {
                  type: "string",
                  name: "label",
                  label: "label",
                },
                {
                  type: "image",
                  name: "link",
                  label: "link",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      type: "object",
      name: "testimonial_chisiamo",
      label: "testimonial_chisiamo",
      fields: [
        {
          type: "boolean",
          name: "enable",
          label: "enable",
        },
        {
          type: "string",
          name: "title",
          label: "title",
        },
        {
          type: "object",
          name: "testimonial_item",
          label: "testimonial_item",
          list: true,
          fields: [
            {
              type: "string",
              name: "name",
              label: "name",
            },
            {
              type: "string",
              name: "designation",
              label: "designation",
            },
            {
              type: "image",
              name: "image",
              label: "image",
            },
            {
              type: "string",
              name: "content",
              label: "content",
              ui: {
                component: "textarea",
              },
            },
          ],
        },
      ],
    },
  ] as TinaField[];
}
export function postFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "title",
    },
    {
      type: "datetime",
      name: "date",
      label: "date",
    },
    {
      type: "image",
      name: "image",
      label: "image",
    },
    {
      type: "string",
      name: "description",
      label: "description",
    },
    {
      type: "string",
      name: "keywords",
      label: "keywords",
      list: true,
      ui: {
        component: "tags",
      },
    },
    {
      type: "string",
      name: "authors",
      label: "authors",
    },
  ] as TinaField[];
}
export function essenzeFields() {
  return [
    {
      type: "string",
      name: "titolo",
      label: "titolo",
    },
    {
      type: "datetime",
      name: "data",
      label: "data",
    },
    {
      type: "image",
      name: "images",
      label: "images",
      list: true,
    },
    {
      type: "string",
      name: "descrizione",
      label: "descrizione",
    },
    {
      type: "string",
      name: "prezzo",
      label: "prezzo",
    },
    {
      type: "string",
      name: "discount_price",
      label: "discount_price",
    },
    {
      type: "string",
      name: "essenza",
      label: "essenza",
      list: true,
      ui: {
        component: "tags",
      },
    },
    {
      type: "string",
      name: "roccia",
      label: "roccia",
      list: true,
      ui: {
        component: "tags",
      },
    },
    {
      type: "string",
      name: "dimensioni",
      label: "dimensioni",
      list: true,
      ui: {
        component: "tags",
      },
    },
  ] as TinaField[];
}
export function suisekiFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "titolo",
    },
    {
      type: "datetime",
      name: "data",
      label: "data",
    },
    {
      type: "image",
      name: "images",
      label: "images",
      list: true,
    },
    {
      type: "string",
      name: "descrizione",
      label: "descrizione",
    },
    {
      type: "string",
      name: "prezzo",
      label: "prezzo",
    },
    {
      type: "string",
      name: "discount_price",
      label: "discount_price",
    },
    {
      type: "string",
      name: "roccia",
      label: "roccia",
      list: true,
      ui: {
        component: "tags",
      },
    },
    {
      type: "string",
      name: "dimensioni",
      label: "dimensioni",
      list: true,
      ui: {
        component: "tags",
      },
    },
    {
      type: "string",
      name: "colors",
      label: "colore",
      list: true,
      ui: {
        component: "tags",
      },
    },
    {
      type: "string",
      name: "categoria",
      label: "categoria",
      list: true,
      ui: {
        component: "tags",
      },
    },
    {
      type: "string",
      name: "poetico",
      label: "poetico",
      list: true,
      ui: {
        component: "tags",
      },
    },
    {
      type: "string",
      name: "origine",
      label: "origine",
      list: true,
      ui: {
        component: "tags",
      },
    },
  ] as TinaField[];
}
